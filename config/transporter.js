const nodemailer = require('nodemailer');
require('dotenv').config()

const user = process.env.FROMMAIL;
const pass = process.env.MAILPASSWORD;

const transporter = nodemailer.createTransport({
  port: 465,
  host: "smtp.gmail.com",
     auth: {
          user,
          pass
       },
  secure: true,
  });

  module.exports = transporter

  