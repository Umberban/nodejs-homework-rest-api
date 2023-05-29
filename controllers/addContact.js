
const contactsFunctions = require("../models/contacts");

const addContact =  async (req, res, next) => {
    try{
   const result = await contactsFunctions.addContact(req.body);
    res.status(201).json(result)}
    catch(err){
        next(err)
    }
  }
  module.exports = {
    addContact,
  }
  