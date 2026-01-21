# EmailJS Contact Form Integration

## Overview
The contact form on `/contact` page uses **EmailJS** to send emails directly from the browser without needing a backend server.

## How It Works

### 1. Form Submission Flow
```
User fills form → Click Submit → Spam checks → Get reCAPTCHA token → Send to EmailJS API → Email delivered to inbox
```

### 2. Spam Protection Layers
- **Honeypot Field**: Hidden input field that bots fill but humans don't
- **Time Validation**: Form must be open for at least 3 seconds before submission
- **reCAPTCHA v3**: Google's invisible bot detection (optional, non-blocking)

### 3. EmailJS Configuration

#### Service Details
- **Service ID**: `service_2tts6ss`
- **Template ID**: `template_48dxotx`
- **Public Key**: `twMo2tgZz4h52ii85`

#### Email Template Variables
The form sends these variables to EmailJS:
- `{{from_name}}` - User's name
- `{{from_email}}` - User's email address
- `{{company}}` - User's company name
- `{{message}}` - User's message
- `{{to_name}}` - Recipient name (set to "Zaftech Team")

#### Recipient Email
Emails are sent to: **talha.jilal@zaftech.ca**

## Setup Instructions

### 1. EmailJS Template Setup
Go to [EmailJS Dashboard](https://dashboard.emailjs.com/) → Email Templates → template_48dxotx

Make sure your template includes all variables:
```
New Contact Form Submission

Name: {{from_name}}
Email: {{from_email}}
Company: {{company}}

Message:
{{message}}
```

### 2. Environment Variables
The API keys are stored in `.env.local`:
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_2tts6ss
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_48dxotx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=twMo2tgZz4h52ii85
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=6LfidJ0lAAAAAL4-TfVe8XzBYmJE8JVMi5VODdIU
NEXT_PUBLIC_RECAPTCHA_SECRET_KEY=6LfidJ0lAAAAAMwJaqwxo3Z1FGZx-iILQ8j7mDnD
```

**Note**: Keys are also hardcoded in the form as fallback if environment variables fail to load.

### 3. reCAPTCHA Setup
- **Type**: reCAPTCHA v3 (Invisible - no checkbox)
- **Site Key**: `6LfidJ0lAAAAAL4-TfVe8XzBYmJE8JVMi5VODdIU`
- **Dashboard**: [Google reCAPTCHA Admin](https://www.google.com/recaptcha/admin)

Add your domain to the reCAPTCHA allowed domains list:
- `localhost` (for development)
- `zaftech.ca` (for production)

## Code Implementation

### File Location
`app/contact/page.tsx`

### Key Code Sections

#### 1. reCAPTCHA Script Loading
```typescript
useEffect(() => {
  const script = document.createElement('script')
  script.src = 'https://www.google.com/recaptcha/api.js?render=6LfidJ0lAAAAAL4-TfVe8XzBYmJE8JVMi5VODdIU'
  script.async = true
  script.onload = () => setRecaptchaLoaded(true)
  document.body.appendChild(script)
}, [])
```

#### 2. Form Submission Handler
```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  
  // Spam checks
  if (honeypot) return  // Bot detected
  if (Date.now() - formStartTime.current < 3000) return  // Too fast
  
  // Get reCAPTCHA token (optional, won't fail if unavailable)
  let token = ''
  try {
    if (recaptchaLoaded && window.grecaptcha) {
      token = await window.grecaptcha.execute('SITE_KEY', { action: 'submit' })
    }
  } catch (e) {
    console.warn('reCAPTCHA failed, continuing without it:', e)
  }
  
  // Send to EmailJS
  const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      service_id: 'service_2tts6ss',
      template_id: 'template_48dxotx',
      user_id: 'twMo2tgZz4h52ii85',
      template_params: {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company,
        message: formData.message,
        to_name: 'Zaftech Team',
      },
    }),
  })
}
```

#### 3. Honeypot Field
```tsx
<div style={{ position: 'absolute', left: '-9999px' }}>
  <input
    type="text"
    name="website"
    value={honeypot}
    onChange={(e) => setHoneypot(e.target.value)}
    tabIndex={-1}
    autoComplete="off"
  />
</div>
```

## Deployment Checklist

### For Production Deployment:
1. ✅ Ensure `.env.local` values are added to hosting platform (Vercel/Netlify)
2. ✅ Add production domain to reCAPTCHA allowed domains
3. ✅ Verify EmailJS template includes all variables (`{{from_email}}` is critical)
4. ✅ Test form submission from production URL
5. ✅ Check spam folder if emails not arriving

## Troubleshooting

### Email Not Receiving
- Check EmailJS dashboard for delivery status
- Verify template variables match form fields
- Check spam/junk folder
- Verify recipient email is correct in EmailJS settings

### reCAPTCHA Not Working
- Verify site key matches domain
- Check browser console for errors
- Ensure domain is added to reCAPTCHA admin panel
- Form will still work if reCAPTCHA fails (it's non-blocking)

### Form Shows Error Message
- Open browser DevTools console (F12)
- Check for detailed error messages
- Verify all EmailJS credentials are correct
- Test EmailJS service is active in dashboard

## API Rate Limits
- **EmailJS Free Tier**: 200 emails/month
- **reCAPTCHA**: 1 million assessments/month (free)

## Security Notes
- ✅ Honeypot prevents basic bot submissions
- ✅ Time validation prevents instant automated submissions
- ✅ reCAPTCHA v3 provides invisible bot protection
- ✅ Client-side validation prevents empty submissions
- ⚠️ API keys are public (exposed in browser) - this is normal for EmailJS
- ⚠️ For high-security needs, consider backend implementation

## Support
- EmailJS Documentation: https://www.emailjs.com/docs/
- reCAPTCHA Documentation: https://developers.google.com/recaptcha/docs/v3
- GitHub Issues: Contact development team

---

**Last Updated**: January 20, 2026
**Maintainer**: Zaftech Development Team
