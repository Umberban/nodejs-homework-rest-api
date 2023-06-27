const { httpError } = require("../../helpers/httpError");
const { UserModel } = require("../../models/users");
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');
const gravatar = require("gravatar");
const emailSend = require("../../services/mail/emailSend");
const register = async (req, res, next) => {
  const { email, subscription, password } = req.body;

  const passwordHash = await bcrypt.hash(password, 10)
  
  const avatarURL = gravatar.url(email);
  const verificationCode = uuidv4();

  const user = await UserModel.create({
    email,
    passwordHash,
    subscription,
    avatarURL,
    verificationCode,
  }).catch(() => {
     throw httpError(409, "Email in use");
  });

  const verifyEmail = {
    to: email,
    subject: "Verify email",
    html: `<a target="_blank" href="http://localhost:3000/users/auth/verify/${verificationCode}">Click to verify email</a>`,
  };
  emailSend(verifyEmail);

  res
    .status(201)
    .json({user: {
      email: user.email,
      subscription: user.subscription,
    }});
};

module.exports = {
  register,
};