const multer = require("multer");
const path = require("path");
const Jimp = require("jimp");
const { UserModel } = require("../../models/users");
const { httpError } = require("../../helpers/httpError");

const multerConfig = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve("./tmp"));
  },
  filename: function (req, file, cb) {
    const filename = file.originalname;
    cb(null, filename);
  },
});

const upload = multer({ storage: multerConfig });

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
    res.json({ avatarURL: filePath });

  } catch (error) {
    throw httpError(401, "Not authorized");
  }
};

module.exports = {
  updateAvatar,
  upload,
};