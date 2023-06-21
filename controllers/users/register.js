const { httpError } = require("../../helpers/httpError");
const { UserModel } = require("../../models/users");
const bcrypt = require('bcrypt');
const gravatar = require("gravatar");
const register = async (req, res, next) => {
  const { email, subscription, password } = req.body;

  const passwordHash = await bcrypt.hash(password, 10)
  
  const avatarURL = gravatar.url(email);

  const user = await UserModel.create({
    email,
    passwordHash,
    subscription,
    avatarURL,
  }).catch(() => {
     throw httpError(409, "Email in use");
  });
  
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