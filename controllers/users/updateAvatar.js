const path = require("path");
const Jimp = require("jimp");
const { UserModel } = require("../../models/users");
const { httpError } = require("../../helpers/httpError");
const fs = require('fs').promises;
const updateAvatar = async (req, res, next) => {
  try {
    const { _id } = req.user;
    const filePath = path.join("avatars", `${_id}.jpeg`);

    Jimp.read(req.file.path, function (err, image) {
      if (err) throw err;
      image
        .resize(250, 250)
        .write(path.join(path.resolve("./public/avatars"), `${_id}.jpeg`));
    });
    await UserModel.findOneAndUpdate(
      { _id: _id },
      { avatarURL: filePath}
    );
    await fs.unlink(req.file.path)
  
    res.json({ avatarURL: filePath });

  } catch (error) {
    throw httpError(401, "Not authorized");
  }
};

module.exports = {
  updateAvatar,
};