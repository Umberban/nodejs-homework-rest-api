const { httpError } = require("../helpers/httpError");
const { UserModel } = require("../models/users");
const jwt = require('jsonwebtoken')

const authCheck = async (req, res, next) => {
  try {
    const [bearer, token] = req.headers.authorization.split(" ");
    if (!token || bearer !== "Bearer" ) {
      next(httpError(401, "Not authorized"));
    }

      const SECRET = process.env.JWT_KEY
      const decodedToken = jwt.decode(token, SECRET)

      const user = await UserModel.findById(decodedToken._id)

      if (!user || !user.token) {
        throw httpError(401, "Not authorized")
      }

      req.token = token;
      req.user = user;
      next();

    } catch (error) {
      next(httpError(401, "Not authorized"));
    }
};

module.exports = {
  authCheck,
};