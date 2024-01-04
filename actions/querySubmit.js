"use server";
import nodemailer from "nodemailer";

export async function sendEmail(formData) {
  console.log(formData,'hi');
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_SENDER_ID,
      pass: process.env.MAIL_SENDER_KEY,
    },
  });

  const mailOptions = {
    from: process.env.MAIL_SENDER_ID,
    to: process.env.MAIL_SENDER_ID,
    subject: "New Event Query",
    text: JSON.stringify(formData),
  };

  return transporter.sendMail(mailOptions);
}