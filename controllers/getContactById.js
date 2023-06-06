const { httpError } = require("../helpers/httpError");
const {ContactModel} = require("../models/contacts");
const getContactById =  async (req, res, next) => {
    const {contactId} = req.params;
    try{
    const result = await ContactModel.findById(contactId);
    if(!result) {
      throw httpError (404, 'Not found');
    }
    res.json(result);
    }catch(err){
      next(err) }
  }
  module.exports = {
    getContactById,
  }
  