const nodemailer = require('nodemailer');

// Create transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'arunmadhu.b@gmail.com',
        pass: 'thws ydgg fbud hemq'
    }
});

// Function to generate Thank You email HTML
const generateThankYouEmail = (name, message) => {
    return `<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif; background-color: #f8fafc; line-height: 1.6; color: #334155;">
  <div style="max-width: 640px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);">
    <div style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); padding: 40px 32px; text-align: center;">
      <h1 style="margin: 0; font-size: 28px; font-weight: 700; color: white; letter-spacing: -0.02em;">Thank You for Your Message</h1>
      <p style="margin: 8px 0 0 0; font-size: 16px; color: rgba(255, 255, 255, 0.9);">We'll be in touch soon</p>
    </div>
    <div style="padding: 40px 32px;">
      <p style="font-size: 16px; color: #475569; margin: 0 0 24px 0;">Hello <strong style="color: #1e293b;">${name}</strong>,</p>
      <p style="font-size: 16px; color: #475569; margin: 0 0 8px 0;">Thank you for reaching out. I have received your message and appreciate you taking the time to contact me.</p>
      <p style="font-size: 16px; color: #475569; margin: 0 0 32px 0;">I will review your inquiry and respond within 24-48 hours.</p>
      <div style="background-color: #f8fafc; border-left: 4px solid #10b981; padding: 24px; border-radius: 8px; margin: 0 0 32px 0;">
        <h3 style="margin: 0 0 16px 0; font-size: 16px; font-weight: 600; color: #1e293b;">Your Message</h3>
        <p style="margin: 0; font-size: 15px; color: #334155; line-height: 1.7;">${message}</p>
      </div>
      <div style="background-color: #f1f5f9; padding: 24px; border-radius: 8px; margin: 0 0 32px 0;">
        <p style="margin: 0 0 16px 0; font-size: 15px; color: #475569; font-weight: 500;">Need to reach me sooner?</p>
        <p style="margin: 0 0 8px 0; font-size: 15px; color: #334155;">📧 <a href="mailto:arunmadhu.b@gmail.com" style="color: #10b981; text-decoration: none; font-weight: 500;">arunmadhu.b@gmail.com</a></p>
        <p style="margin: 0; font-size: 15px; color: #334155;">📱 <a href="tel:+919938956999" style="color: #10b981; text-decoration: none; font-weight: 500;">+91 99389 56999</a></p>
      </div>
      <p style="font-size: 16px; color: #64748b; margin: 0 0 8px 0;">Best regards,</p>
      <p style="font-size: 18px; font-weight: 700; color: #1e293b; margin: 0 0 4px 0;">Arun Bondada</p>
      <p style="font-size: 14px; color: #64748b; margin: 0;">Full Stack Developer</p>
    </div>
    <div style="background-color: #f8fafc; padding: 24px 32px; text-align: center; border-top: 1px solid #e2e8f0;">
      <p style="font-size: 13px; color: #64748b; margin: 0; line-height: 1.5;">This automated message was sent because you submitted the contact form on my portfolio website.</p>
    </div>
  </div>
</body>
</html>`;
};

// Function to generate Notification email HTML
const generateNotificationEmail = (name, userEmail, message, dateTime) => {
    return `<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif; background-color: #f8fafc; line-height: 1.6; color: #334155;">
  <div style="max-width: 640px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);">
    <div style="background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%); padding: 40px 32px; text-align: center;">
      <h1 style="margin: 0; font-size: 28px; font-weight: 700; color: white; letter-spacing: -0.02em;">New Contact Form Submission</h1>
      <p style="margin: 8px 0 0 0; font-size: 16px; color: rgba(255, 255, 255, 0.9);">Someone just reached out</p>
    </div>
    <div style="padding: 40px 32px;">
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 32px;">
        <tr><td style="padding: 12px 0; font-size: 14px; color: #64748b; font-weight: 500; width: 100px; vertical-align: top;">Name</td><td style="padding: 12px 0; font-size: 16px; color: #1e293b; font-weight: 600;">${name}</td></tr>
        <tr><td style="padding: 12px 0; font-size: 14px; color: #64748b; font-weight: 500; vertical-align: top;">Email</td><td style="padding: 12px 0; font-size: 16px;"><a href="mailto:${userEmail}" style="color: #10b981; text-decoration: none; font-weight: 500;">${userEmail}</a></td></tr>
        <tr><td style="padding: 12px 0; font-size: 14px; color: #64748b; font-weight: 500; vertical-align: top;">Submitted</td><td style="padding: 12px 0; font-size: 16px; color: #1e293b;">${dateTime}</td></tr>
      </table>
      <div style="background-color: #f8fafc; border-left: 4px solid #3b82f6; padding: 24px; border-radius: 8px; margin: 0 0 32px 0;">
        <h3 style="margin: 0 0 16px 0; font-size: 16px; font-weight: 600; color: #1e293b;">Message</h3>
        <p style="margin: 0; font-size: 15px; color: #334155; line-height: 1.7;">${message}</p>
      </div>
      <p style="font-size: 16px; color: #475569; margin: 0 0 8px 0;">Reply directly to <a href="mailto:${userEmail}" style="color: #3b82f6; text-decoration: none;">${userEmail}</a></p>
    </div>
    <div style="background-color: #f8fafc; padding: 24px 32px; text-align: center; border-top: 1px solid #e2e8f0;">
      <p style="font-size: 13px; color: #64748b; margin: 0; line-height: 1.5;">Generated from portfolio contact form.</p>
    </div>
  </div>
</body>
</html>`;
};

// Updated sendContactEmail function - sends TWO emails
const sendContactEmail = async (name, userEmail, message) => {

    try {
        const cleanMessage = message.replace(/<[^>]*>/g, '');
        const dateTime = new Date().toLocaleString('en-IN', { 
            timeZone: 'Asia/Kolkata',
            dateStyle: 'medium',
            timeStyle: 'short'
        });

        // Email 1: Thank you to visitor
        const thankYouEmail = {
            from: '"Arun Bondada" <arunmadhu.b@gmail.com>',
            to: userEmail,
            subject: `Thank You ${name} - Message Received`,
            html: generateThankYouEmail(name, cleanMessage)
        };

        // Email 2: Notification to you
        const notificationEmail = {
            from: '"Portfolio Contact" <arunmadhu.b@gmail.com>',
            to: 'arunmadhu.b@gmail.com',
            subject: `New Contact: ${name}`,
            html: generateNotificationEmail(name, userEmail, cleanMessage, dateTime)
        };

        // Send both emails
        await Promise.all([
            transporter.sendMail(thankYouEmail),
            transporter.sendMail(notificationEmail)
        ]);

        console.log('✅ Both emails sent successfully!');
        return { success: true };
    } catch (error) {
        console.error('❌ Email error:', error);
        throw error;
    }
};

module.exports = { transporter, sendContactEmail };
