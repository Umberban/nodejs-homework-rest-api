const {ContactModel} = require("../../models/contacts");

const listContacts =  async (req, res, next) => {
  const { _id } = req.user;
    const result = await ContactModel.find({ owner: _id });
    res.json(result);
  }
  module.exports = {
    listContacts,
  }
  