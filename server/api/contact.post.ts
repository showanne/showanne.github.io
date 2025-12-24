import nodemailer from 'nodemailer';

export default defineEventHandler(async event => {
  // Nuxt 3.3+ uses useRuntimeConfig()
  const config = useRuntimeConfig();

  // Get the form data from the request body
  const body = await readBody(event);
  const { name, email, message } = body;

  // Basic validation
  if (!name || !email || !message) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing required fields'
    });
  }

  // Create a transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: config.gmailUser, // Your Gmail address from .env
      pass: config.gmailAppPassword // Your App Password from .env
    }
  });

  // Set up email data
  const mailOptions = {
    from: `"Portfolio Contact" <${config.gmailUser}>`, // sender address
    to: config.gmailUser, // list of receivers (yourself)
    subject: `New message from ${name} via Portfolio`, // Subject line
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`, // plain text body
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      <hr>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    ` // html body
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true, message: 'Message sent successfully!' };
  } catch (error) {
    console.error('Error sending email:', error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Error sending email'
    });
  }
});
