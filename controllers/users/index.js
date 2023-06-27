const { currentUser } = require("./currentUser");
const { login } = require("./login");
const { logout } = require("./logout");
const { register } = require("./register");
const { resendEmail } = require("./resendEmail");
const { updateAvatar} = require("./updateAvatar");
const { verifyEmail } = require("./verifyEmail");


module.exports = {
register, 
login,
logout,
currentUser,
updateAvatar,
verifyEmail,
resendEmail,
}