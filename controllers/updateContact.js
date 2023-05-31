const contactsFunctions = require("../models/contacts");

const updateContact =  async (req, res, next) => {
    const {contactId} = req.params;
    try{
        const result = await contactsFunctions.updateContact(contactId, req.body);
        res.json(result).status(200)
        }
   catch(err){
        next(err) }
    }
  module.exports = {
    updateContact,
  }
  