const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required to set'],
        trim: true,
      },
      email: {
        type: String,
        required: true,
        trim: true,
      },
      phone: {
        type: String,
        required: true,
        trim: true,
      },
      favorite: {
        type: Boolean,
        default: false,
      }, 
}, {
    versionKey: false,
    timestamps: {createdAt: true, updatedAt: false,}
})
contactSchema.post("save",(error,data,next)=>{error.status=400;next();})
const ContactModel = mongoose.model('contacts', contactSchema);

module.exports = {
  ContactModel,
}