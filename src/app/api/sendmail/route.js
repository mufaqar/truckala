import { NextResponse } from 'next/server';
let nodemailer = require('nodemailer')

const EMAIL = 'softsgens@gmail.com';
const GMAIL_PASSWORD = 'bczjxzfatgxsebrz';

export async function POST(request) {
  const {name, email, phone, company, comment} = await request.json()

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
     user: EMAIL,
     pass: GMAIL_PASSWORD,
    }
  });

  try {
     await transporter.sendMail({
          from: EMAIL,
          to: `mufaqar@gmail.com, ${email}`,
           subject: `Contact form submission from ${name}`,
           html: `<p>You have a contact form submission</p>
             <p><strong>Name: </strong> ${name}</p>
             <p><strong>Email: </strong> ${email}</p>
             <p><strong>Mobile Number: </strong> ${phone}</p>
             <p><strong>Company: </strong> ${company}</p>
             <p><strong>Comment: </strong> ${comment}</p>
           `
         });
  } catch (error) {
    return NextResponse.status(500).json({ error: error.message || error.toString() });
  }
  return NextResponse.json({ status: 200, message: "email send successfully!" });
}