const { httpError } = require("../../helpers/httpError");
const {ContactModel} = require("../../models/contacts");
const getContactById =  async (req, res, next) => {
    const {contactId} = req.params;
    const { _id } = req.user;
    const result = await ContactModel.findById({ _id: contactId, owner: _id });
    if(!result) {
      throw httpError (404, 'Not found');
    }
    res.json(result);
  
  }
  module.exports = {
    getContactById,
  }
  