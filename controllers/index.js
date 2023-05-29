const { addContact } = require("./addContact");
const { getContactById } = require("./getContactById");
const { listContacts } = require("./listContact");
const { removeContact } = require("./removeContact");
const { updateContact } = require("./updateContact");
module.exports = {
    listContacts,
    addContact,
    getContactById,
    removeContact,
    updateContact,
  }
