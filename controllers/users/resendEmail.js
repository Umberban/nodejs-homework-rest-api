const { httpError } = require("../../helpers/httpError");
const { UserModel } = require("../../models/users");
const emailSend = require("../../services/mail/emailSend");

const resendEmail = async (req, res) => {
  const { email } = req.body;
 
  const user = await UserModel.findOne({ email });
  if (!user) {
    throw httpError(401, "Email not found");
  }

  if (user.verify) {
    throw httpError(400, "Verification has already been passed");
  }

  const verifyEmail = {
    to: email,
    subject: "Verify email",
    html: `<a target="_blank" href="http://localhost:3000/users/verify/${user.verificationCode}">Click to verify email</a>`,
  };
    emailSend(verifyEmail);

  res.json({
    message: "Verification email sent",
  });
};

module.exports = {
  resendEmail,
};