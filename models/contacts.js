const fs = require('fs/promises')
const path = require("path");
const contactsPath = path.join(__dirname, "../models/contacts.json");
const shortid = require('shortid');
const { httpError } = require('../helpers/httpError');
const listContacts = async () => {
    const data = await fs.readFile(contactsPath); 
    const contacts = JSON.parse(data);
    return contacts;
  
}

const getContactById = async (contactId) => {
    const data = await fs.readFile(contactsPath); 
    const text = JSON.parse(data);
    return text.find(contact=> contact.id === contactId)
}

const removeContact = async (contactId) => {
  const data = await fs.readFile(contactsPath); 
  const contacts = JSON.parse(data);
  const deletedContact = contacts.find(contact=>contact.id===contactId);
  if(deletedContact){
      const newContacts =  contacts.filter(contact=>contact.id!==contactId);
      fs.writeFile(contactsPath,JSON.stringify(newContacts));}
  else{ throw httpError(404,'Not Found')
  }
  }

const addContact = async (body) => {
    console.log(body);
    const data = await fs.readFile(contactsPath); 
    const contacts = JSON.parse(data);
  const newContact={
      id: shortid.generate(),
      ...body
      }
  await fs.writeFile(contactsPath,JSON.stringify([...contacts,newContact]));
return newContact 
  
}

const updateContact = async (contactId, body) => {
  const contacts = JSON.parse(await fs.readFile(contactsPath)); 
  const index = contacts.findIndex(({id}) => id === contactId);
  if (index === -1) {
    throw httpError(404,'Not Found')
  }
  contacts[index] = {id: contactId, ...body};
  await fs.writeFile(contactsPath,JSON.stringify([contacts]));
  return contacts[index];
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
}
