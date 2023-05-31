const contactsFunctions = require("../models/contacts");

const getContactById =  async (req, res, next) => {
    const {contactId} = req.params;
    try{
    const result = await contactsFunctions.getContactById(contactId);
    res.json(result);
    }catch(err){
      next(err) }
  }
  module.exports = {
    getContactById,
  }
  