const { ContactModel } = require("../models/contacts");
const { httpError } = require("../helpers/httpError");

const updateContactStatus = async (req, res, next) => {
  const { contactId } = req.params;
  const { favorite } = req.body;
  try{
  const result = await ContactModel.findByIdAndUpdate(
    contactId,
    { favorite},
    { new: true }
  );
  if (!result) {
    throw httpError (404, 'Not found');
   }
  res.json(result);}
  catch(err){
     next(err)}
};

module.exports = {
    updateContactStatus,
};