
const {ContactModel} = require("../../models/contacts");

const addContact =  async (req, res, next) => {
  const { _id:owner } = req.user
   const result = await ContactModel.create({...req.body,owner});
    res.status(201).json(result)
   
  }
  module.exports = {
    addContact,
  }
  