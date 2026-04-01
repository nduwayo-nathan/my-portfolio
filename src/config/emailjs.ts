// EmailJS Configuration
// Replace these with your actual EmailJS credentials from https://www.emailjs.com/

export const EMAILJS_CONFIG = {
  SERVICE_ID: 'YOUR_SERVICE_ID', // e.g., 'service_abc123'
  TEMPLATE_ID: 'YOUR_TEMPLATE_ID', // e.g., 'template_xyz789'
  PUBLIC_KEY: 'YOUR_PUBLIC_KEY', // e.g., 'user_def456'
};

// Instructions to set up EmailJS:
// 1. Go to https://www.emailjs.com/ and create an account
// 2. Create an email service (Gmail, Outlook, etc.)
// 3. Create an email template with these variables:
//    - {{from_name}} - sender's full name
//    - {{from_email}} - sender's email
//    - {{phone}} - sender's phone (optional)
//    - {{subject}} - message subject
//    - {{message}} - message content
//    - {{budget}} - project budget (optional)
//    - {{timeline}} - project timeline (optional)
// 4. Get your Service ID, Template ID, and Public Key
// 5. Replace the placeholder values above with your actual credentials