const Joi = require('joi')
const addSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    phone: Joi.number().required(),
}).min(3)
const updateSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    phone: Joi.number().required(),
}).min(1)



module.exports = {
    addSchema,
    updateSchema,
  }