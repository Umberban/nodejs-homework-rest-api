const contactsFunctions = require("../models/contacts");

const listContacts =  async (req, res, next) => {
    const result = await contactsFunctions.listContacts();
    res.json(result);
  }
  module.exports = {
    listContacts,
  }
  