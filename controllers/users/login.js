const { UserModel } = require("../../models/users");
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const { httpError } = require("../../helpers/httpError");

const login = async (req, res, next) => {
    const { email, password } = req.body;
    
    const user = await UserModel.findOne({ email }); 
    if (!user.verify ) {
      throw httpError(401, "Not verify")
    }
 if (user === null) {
    throw httpError(401, "Email or password is wrong");
  }
 const isPasswordValid = await bcrypt.compare(password, user.passwordHash)
 if (!isPasswordValid) {
    throw httpError(401, "Email or password is wrong");
 }

 const data = {
  _id: user._id.toString(),
  username: user.email,
};

const token = jwt.sign(data, process.env.JWT_KEY)
console.log(token)

 await UserModel.findOneAndUpdate(user._id, {token})
 

  res.json({token, user: {
    email: user.email,
    subscription: user.subscription
  } });
};

module.exports = {
  login,
};