const nodemailer = require("nodemailer");
require("dotenv").config();

const { UKR_NET_PASSWORD, UKR_NET_EMAIL } = process.env;

const nodemailerConfig = {
  host: "smtp.ukr.net",
  port: 465,
  secure: true,
  auth: {
    user: UKR_NET_EMAIL,
    pass: UKR_NET_PASSWORD,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

const emailSend = (data) => {
  const email = { ...data, from: `Borys<${UKR_NET_EMAIL}>` };
  transport
    .sendMail(email)
    .then(() => console.log("email send"))
    .catch((error) => console.log(`error-message ${error.message}`));

  return true;
};

module.exports = emailSend;