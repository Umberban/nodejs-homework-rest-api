const express = require('express')
const Controllers = require('../../controllers/contacts');
const { validateBody } = require('../../middleware/bodyCheck');
const {contactAddSchema,contactFavoriteSchema} = require('../../helpers/schemas')
const { authCheck } = require("../../middleware/authCheck");
const { exceptionWrapper } = require('../../helpers/exceptionWrapper');
const router = express.Router()
router.get('/',authCheck, exceptionWrapper(Controllers.listContacts))

router.get('/:contactId',authCheck,exceptionWrapper(Controllers.getContactById))

router.post('/',validateBody(contactAddSchema),authCheck,exceptionWrapper(Controllers.addContact))

router.delete('/:contactId',authCheck, exceptionWrapper(Controllers.removeContact))

router.put('/:contactId',validateBody(contactAddSchema),authCheck, exceptionWrapper(Controllers.updateContact))
router.patch (
    "/:contactId/favorite",validateBody(contactFavoriteSchema),authCheck, exceptionWrapper(Controllers.updateContactStatus))
module.exports = router
