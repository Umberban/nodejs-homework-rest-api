const express = require('express')
const Controllers = require('../../controllers/index');
const { validateUpdateBody, validateAddBody } = require('../../middleware/bodyCheck');
const router = express.Router()
router.get('/', Controllers.listContacts)

router.get('/:contactId',Controllers.getContactById)

router.post('/',validateAddBody(),Controllers.addContact)

router.delete('/:contactId', Controllers.removeContact)

router.put('/:contactId',validateUpdateBody(), Controllers.updateContact)

module.exports = router
