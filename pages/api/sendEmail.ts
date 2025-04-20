import nodemailer from 'nodemailer';

import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, message, contact } = req.body;

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp-mail.outlook.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.NEXT_PUBLIC_OUTLOOK_EMAIL, // Your Outlook email
        pass: process.env.NEXT_PUBLIC_OUTLOOK_PASSWORD, // Your Outlook password
      },
    });

    // Email options
    const mailOptions = {
      from: process.env.NEXT_PUBLIC_OUTLOOK_EMAIL,
      to: process.env.NEXT_PUBLIC_OUTLOOK_EMAIL, // Send to the same Outlook email
      subject: `New message from ${name}`,
      text: `You have a new message from ${name} (${email}) and contact number ${contact}.:
      
      Message: ${message}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Failed to send email' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}