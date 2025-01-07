import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, contact, service, message } = req.body;

  if (!name || !email || !contact || !service || !message || service=='Subject') {
    return res.status(400).json({ message: 'All fields are required', statusCode : 400 });
  }

  try {
    // Configure Nodemailer with Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, // Your Gmail address
        pass: process.env.GMAIL_APP_PASSWORD, // Your Gmail app password
      },
    });

    // Set email options
    const mailOptions = {
      from: `"Your Name" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER, // Replace with the recipient's email
      subject: "New Form Submission",
      html: `
          <h3>New Contact Form Submission</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Contact:</strong> ${contact}</p>
          <p><strong>Contact:</strong> ${service}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return res.status(200).json({ message: "Email sent successfully!", statusCode : 200 });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: `Failed to send email ${error}`, statusCode : 500 });
  }
}
