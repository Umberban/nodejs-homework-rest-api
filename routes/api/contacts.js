const express = require('express')
const Controllers = require('../../controllers/index');
const { validateBody } = require('../../middleware/bodyCheck');
const {schema,schemaFavorite} = require('../../helpers/schemas')
const router = express.Router()
router.get('/', Controllers.listContacts)

router.get('/:contactId',Controllers.getContactById)

router.post('/',validateBody(schema),Controllers.addContact)

router.delete('/:contactId', Controllers.removeContact)

router.put('/:contactId',validateBody(schema), Controllers.updateContact)
router.patch (
    "/:contactId/favorite",validateBody(schemaFavorite),Controllers.updateContactStatus)
module.exports = router
