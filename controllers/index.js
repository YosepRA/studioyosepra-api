'use strict';

const mailTransporter = require('../services/nodemailer');
const { handlePromise } = require('../utils/helpers');

module.exports = {
  async sendMail(req, res) {
    const {
      body: { email, subject, message },
    } = req;

    const mailPromise = mailTransporter.sendMail({
      from: email,
      to: 'studioyosepra@gmail.com',
      subject: subject,
      text: message,
    });
    const [data, error] = await handlePromise(mailPromise);

    if (error) {
      return res.status(500).json({
        success: false,
        code: error.code,
        message: error.message,
      });
    }

    return res.json({ success: true, message: 'Email sent.' });
  },
};
