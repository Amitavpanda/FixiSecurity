import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: "Method not allowed." });
  }

  const { captchaValue } = req.body;

  if (!captchaValue) {
    return res.status(400).json({ success: false, message: "CAPTCHA token is missing." });
  }

  try {
    console.log("Verifying CAPTCHA...");
    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captchaValue}`,
      {
        method: "POST",
      }
    );

    const data = await response.json();

    if (data.success) {
      return res.status(200).json({ success: true, message: "CAPTCHA verified." });
    } else {
      return res.status(400).json({ success: false, message: "Invalid CAPTCHA." });
    }
  } catch {
    return res.status(500).json({ success: false, message: "Error verifying CAPTCHA." });
  }
}