import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

// Your email to receive notifications
const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL || 'karol@verataventures.com'

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email required' },
        { status: 400 }
      )
    }

    // Send notification email to you
    await resend.emails.send({
      from: 'Verata Ventures <noreply@verataventures.com>',
      to: NOTIFY_EMAIL,
      subject: 'New Waitlist Signup',
      html: `
        <h2>New signup on verataventures.com</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Time:</strong> ${new Date().toISOString()}</p>
      `,
    })

    // Optional: Send confirmation to the subscriber
    // await resend.emails.send({
    //   from: 'Verata Ventures <noreply@verataventures.com>',
    //   to: email,
    //   subject: 'Welcome to Verata Ventures',
    //   html: `
    //     <h2>Thanks for signing up!</h2>
    //     <p>We'll let you know when we launch.</p>
    //   `,
    // })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Subscribe error:', error)
    return NextResponse.json(
      { error: 'Failed to subscribe' },
      { status: 500 }
    )
  }
}
