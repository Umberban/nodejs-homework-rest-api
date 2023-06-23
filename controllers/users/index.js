const { currentUser } = require("./currentUser");
const { login } = require("./login");
const { logout } = require("./logout");
const { register } = require("./register");
const { updateAvatar} = require("./updateAvatar");


module.exports = {
register, 
login,
logout,
currentUser,
updateAvatar,
}