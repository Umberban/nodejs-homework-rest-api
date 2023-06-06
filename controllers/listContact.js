const {ContactModel} = require("../models/contacts");

const listContacts =  async (req, res, next) => {
    const result = await ContactModel.find({});
    res.json(result);
  }
  module.exports = {
    listContacts,
  }
  