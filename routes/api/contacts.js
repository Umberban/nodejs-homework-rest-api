const express = require('express')
const Controllers = require('../../controllers/index');
const { validateBody, validateBodyUpdate } = require('../../middleware/bodyCheck');
const router = express.Router()
router.get('/', Controllers.listContacts)

router.get('/:contactId',Controllers.getContactById)

router.post('/',validateBody(),Controllers.addContact)

router.delete('/:contactId', Controllers.removeContact)

router.put('/:contactId',validateBody(), Controllers.updateContact)
router.patch (
    "/:contactId/favorite",validateBodyUpdate(),Controllers.updateContactStatus)
module.exports = router
