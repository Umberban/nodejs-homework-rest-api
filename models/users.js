const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
        passwordHash: {
          type: String,
          required: [true, 'Set password for user'],
          trim: true,
        },
        email: {
          type: String,
          required: [true, 'Email is required'],
          unique: true,
          index: true,
        },
        subscription: {
          type: String,
          enum: ["starter", "pro", "business"],
          default: "starter"
        },
        verify:{
          type: Boolean,
          default: false,
        },
        verificationCode:{
          type: String,
          default: "",
          required: [true, "Verify token is required"],
        },
         token: String,
         avatarURL:String,
        }, {
          versionKey: false,
          timestamps: {
              createdAt: true,
              updatedAt: false,
          }
})

const UserModel = mongoose.model('users', userSchema);

module.exports = {
    UserModel,
}