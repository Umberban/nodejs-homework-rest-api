const { UserModel } = require("../../models/users");
const { httpError } = require("../../helpers/httpError");

const verifyEmail = async (req, res) => {
  const { verificationCode } = req.params;

  const user = await UserModel.findOne({ verificationCode });
  
  if (!user) {
    throw httpError (401, "User not found");
  }
  await UserModel.findByIdAndUpdate(user._id, {
    verify: true,
    verificationCode: "",
  });
  res.json({
    message: "Verification successful",
  });
};

module.exports = {
  verifyEmail,
};