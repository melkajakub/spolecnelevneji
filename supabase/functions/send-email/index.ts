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

    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')
    if (!RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY is not set')
    }

    let emailPayload: any = {
      from: 'kontakt@spolecnelevneji.cz',
      to: ['info@spolecnelevneji.cz'],
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
      const fileBuffer = await file.arrayBuffer()
      const fileBase64 = btoa(String.fromCharCode(...new Uint8Array(fileBuffer)))
      
      emailPayload.attachments = [{
        filename: file.name,
        content: fileBase64,
        content_type: file.type
      }]
    }

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
      throw new Error(`Failed to send email: ${res.status}`)
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