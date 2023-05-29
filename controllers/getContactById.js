const contactsFunctions = require("../models/contacts");

const getContactById =  async (req, res, next) => {
    const {contactId} = req.params;
    const result = await contactsFunctions.getContactById(contactId);
    res.json(result);
  }
  module.exports = {
    getContactById,
  }
  