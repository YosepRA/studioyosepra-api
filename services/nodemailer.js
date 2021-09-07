'use strict';

const nodemailer = require('nodemailer');

let host = process.env.SMTP_HOST;
let port = process.env.SMTP_PORT;
let user = process.env.SMTP_USER;
let pass = process.env.SMTP_PASS;

if (
  host === undefined ||
  port === undefined ||
  user === undefined ||
  pass === undefined
) {
  console.log(
    'You are using fake SMTP service for nodemailer transporter. Provide SMTP server data as environment variables to change it.',
  );
  host = 'smtp.ethereal.email';
  host = 587;
  user = 'flavio16@ethereal.email';
  pass = 'vCttTme1rHqEerENm3';
}

const transporter = nodemailer.createTransport({
  host,
  port: 587,
  secure: false,
  auth: {
    user,
    pass,
  },
});

module.exports = transporter;
