import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const formData = await req.formData()
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const message = formData.get('message') as string
    const file = formData.get('file') as File | null

    console.log('Received form data:', { name, email, hasMessage: !!message, hasFile: !!file })

    // Validate required fields
    if (!name || !email) {
      throw new Error('Name and email are required')
    }

    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')
    if (!RESEND_API_KEY) {
      console.error('RESEND_API_KEY environment variable is not set')
      throw new Error('RESEND_API_KEY is not set')
    }

    console.log('Resend API key detected, length:', RESEND_API_KEY.length)

    let emailPayload: any = {
      from: 'Společně levněji <info@spolecnelevneji.cz>',
      to: ['info@spolecnelevneji.cz'],
      reply_to: email || undefined,
      subject: 'Nový zájem o hlídání cen energií',
      html: `
        <h2>Nový zájem o službu</h2>
        <p><strong>Jméno:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Zpráva:</strong></p>
        <p>${message || 'Zákazník nenapsal žádnou zprávu.'}</p>
        ${file ? '<p><strong>Příloha:</strong> Ano (viz příloha)</p>' : ''}
        <hr>
        <p><small>Odesláno z kontaktního formuláře na spolecnelevneji.cz</small></p>
      `,
    }

    // Add attachment if file exists
    if (file && file.size > 0) {
      console.log(`Processing file attachment: ${file.name}, size: ${file.size} bytes`)
      
      // Check file size limit (10MB)
      if (file.size > 10 * 1024 * 1024) {
        throw new Error('Soubor je příliš velký. Maximální velikost je 10MB.')
      }
      
      // Convert file to base64 using proper encoding
      const fileBuffer = await file.arrayBuffer()
      const uint8Array = new Uint8Array(fileBuffer)
      
      // Use proper base64 encoding that preserves file integrity
      let binaryString = ''
      for (let i = 0; i < uint8Array.length; i++) {
        binaryString += String.fromCharCode(uint8Array[i])
      }
      const base64 = btoa(binaryString)
      
      emailPayload.attachments = [{
        filename: file.name,
        content: base64,
        content_type: file.type
      }]
      console.log('File attachment added to email payload')
    }

    console.log('Sending email via Resend API...')

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify(emailPayload),
    })

    if (!res.ok) {
      const errorData = await res.text()
      console.error('Resend API error:', errorData)
      throw new Error(`Resend API ${res.status}: ${errorData}`)
    }

    const data = await res.json()
    console.log('Email sent successfully:', data)

    return new Response(
      JSON.stringify({ success: true, messageId: data.id }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      },
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return new Response(
      JSON.stringify({ 
        error: error.message || 'Failed to send email',
        success: false 
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      },
    )
  }
})