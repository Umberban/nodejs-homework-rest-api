const { httpError } = require("../../helpers/httpError");
const { ContactModel } = require("../../models/contacts");

const updateContactStatus = async (req, res, next) => {
  const { contactId } = req.params;
  const { favorite } = req.body;

  const result = await ContactModel.findByIdAndUpdate(
    contactId,
    { favorite},
    { new: true }
  );
  if (!result) {
    throw httpError (404, 'Not found');
   }
  res.json(result);
  
};

module.exports = {
    updateContactStatus,
};