
const {ContactModel} = require("../models/contacts");

const addContact =  async (req, res, next) => {
    try{
   const result = await ContactModel.create(req.body);
    res.status(201).json(result)}
    catch(err){
        next(err)
    }
  }
  module.exports = {
    addContact,
  }
  