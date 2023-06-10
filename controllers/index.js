const { addContact } = require("./addContact");
const { getContactById } = require("./getContactById");
const { listContacts } = require("./listContact");
const { removeContact } = require("./removeContact");
const { updateContact } = require("./updateContact");
const { updateContactStatus } = require("./updateContactsStatus");
module.exports = {
    listContacts,
    addContact,
    getContactById,
    removeContact,
    updateContact,
    updateContactStatus,
  }
