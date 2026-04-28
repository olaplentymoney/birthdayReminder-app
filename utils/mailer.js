const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.APP_PASSWORD,
  },
});

const sendBirthdayEmail = async (user) => {
  await transporter.sendMail({
    from: process.env.EMAIL,
    to: user.email,
    subject: "Happy Birthday 🎉",
    html: `<h2>Happy Birthday, ${user.username}! 🎂</h2>
           <p>Wishing you success, happiness and long life!</p>`,
  });
};

module.exports = sendBirthdayEmail;
