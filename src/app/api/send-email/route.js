import nodemailer from "nodemailer";

export async function POST(req) {
  const { name, email, phone, message, packageName } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: email,
    to: process.env.EMAIL_USER,
    subject: "New Package Inquiry",
    html: `
      <h3>New Form Submission</h3>
      <p><b>Selected Package:</b> ${packageName}</p>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Phone:</b> ${phone}</p>
      <p><b>Message:</b> ${message}</p>
      
    `,
  });

  return Response.json({ success: true });
}