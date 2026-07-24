import nodemailer from "nodemailer";

export async function POST(req) {

  try {

    const {
      form_name,
      form_email,
      form_phone,
      message,
    } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "New Contact Form",
      html: `
        <h2>New Form Submission</h2>

        <p><b>Name:</b> ${form_name}</p>
        <p><b>Email:</b> ${form_email}</p>
        <p><b>Phone:</b> ${form_phone}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    return Response.json({
      success: true,
      message: "Email sent successfully",
    });

  } catch (error) {

    console.log(error);

    return Response.json({
      success: false,
      message: "Something went wrong",
    });

  }

}