const { httpError } = require("../../helpers/httpError");
const {ContactModel} = require("../../models/contacts");

const removeContact =  async (req, res, next) => {
    const {contactId} = req.params;
    
    const result= await ContactModel.findByIdAndDelete(contactId);
    if(!result) {
      throw httpError (404, 'Not found');
    }
    res.json({ message: 'contact deleted' })
   
    }

  module.exports = {
    removeContact,
  }
  