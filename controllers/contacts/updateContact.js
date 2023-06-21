const { httpError } = require("../../helpers/httpError");
const {ContactModel} = require("../../models/contacts");
const updateContact =  async (req, res, next) => {
    const {contactId} = req.params;
    const { name, email, phone } = req.body;
    
      const result = await ContactModel.findByIdAndUpdate(
        contactId,
        { name, email, phone },
        { new: true }
      );
      if (!result) {
        throw httpError (404, 'Not found');
       }
        res.json(result).status(200)
  
    }
  module.exports = {
    updateContact,
  }
  