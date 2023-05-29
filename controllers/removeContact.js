const contactsFunctions = require("../models/contacts");

const removeContact =  async (req, res, next) => {
    const {contactId} = req.params;
    try{
    await contactsFunctions.removeContact(contactId);
        res.json({ message: 'contact deleted' })
    }catch(err){
        next(err) }
    }

  module.exports = {
    removeContact,
  }
  