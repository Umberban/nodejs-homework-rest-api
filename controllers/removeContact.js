const { httpError } = require("../helpers/httpError");
const {ContactModel} = require("../models/contacts");

const removeContact =  async (req, res, next) => {
    const {contactId} = req.params;
    try{
    const res= await ContactModel.findByIdAndDelete(contactId);
    if(!res) {
      throw httpError (404, 'Not found');
    }
        res.json({ message: 'contact deleted' })
    }catch(err){
        next(err) }
    }

  module.exports = {
    removeContact,
  }
  