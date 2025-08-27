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
    const contractHolderName = formData.get('contractHolderName') as string
    const contractHolderBirthDate = formData.get('contractHolderBirthDate') as string
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const billingName = formData.get('billingName') as string
    const billingAddress = formData.get('billingAddress') as string
    const message = formData.get('message') as string
    const file = formData.get('file') as File | null

    console.log('Received form data:', { contractHolderName, name, email, hasMessage: !!message, hasFile: !!file })

    // Validate required fields
    if (!contractHolderName || !contractHolderBirthDate || !name || !email || !billingName || !billingAddress) {
      throw new Error('Všechna povinná pole musí být vyplněna')
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
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">Nová poptávka - Hlídání cen energií</h2>
          
          <h3 style="color: #059669; margin-top: 20px;">Údaje osoby na odběrném místě:</h3>
          <p><strong>Jméno:</strong> ${contractHolderName}</p>
          <p><strong>Datum narození:</strong> ${contractHolderBirthDate}</p>
          
          <h3 style="color: #059669; margin-top: 20px;">Kontaktní údaje:</h3>
          <p><strong>Jméno:</strong> ${name}</p>
          <p><strong>E-mail:</strong> ${email}</p>
          
          <h3 style="color: #059669; margin-top: 20px;">Fakturační údaje:</h3>
          <p><strong>Jméno:</strong> ${billingName}</p>
          <p><strong>Adresa:</strong> ${billingAddress}</p>
          
          <h3 style="color: #059669; margin-top: 20px;">Zpráva:</h3>
          <p>${message || 'Zákazník nenapsal žádnou zprávu.'}</p>
          
          ${file ? '<p><strong>Příloha:</strong> Ano (viz příloha)</p>' : ''}
          
          <hr style="margin: 20px 0; border: none; border-top: 1px solid #e5e7eb;">
          <p style="color: #6b7280; font-size: 14px;">
            Odesláno z kontaktního formuláře na spolecnelevneji.cz
          </p>
        </div>
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