import { sendContactEmail } from '../../middleware/nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: 'Missing required fields' });
    }
    // console.log('api.contact.js called', name,"-", email, "-", message, "-", req.body);
    await sendContactEmail(name, email, message);
    res.status(200).json({ success: true, message: 'Emails sent successfully!' });
  } catch (error) {
    console.error('API Error:', error);
    res.status(500).json({ success: false, message: 'Failed to send email' });
  }
}
