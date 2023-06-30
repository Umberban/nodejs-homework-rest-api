const Joi = require('joi')
const regexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const contactAddSchema = Joi.object({
    name: Joi.string().required().messages({'any.required': `missing required name field `}),
    email: Joi.string().required().messages({'any.required': `missing required email field `}),
    phone: Joi.string().required().messages({'any.required': `missing required phone field `}),
}).min(3)
const contactFavoriteSchema = Joi.object({
    favorite: Joi.boolean().required().messages({'any.required': `missing field favorite`}),
    
})
const userLoginSchema = Joi.object({
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .required(),
    password: Joi.string().min(6).max(24).required(),
  });
  const userRegisterSchema = Joi.object({
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .required(),
    subscription: Joi.string().valid('starter', 'pro', 'business'),
    password: Joi.string().min(6).max(24).required(),
  });

  const verifySchema = Joi.object({
    email: Joi.string().pattern(regexp).required(),
  });
  
module.exports = {
  contactAddSchema,
  contactFavoriteSchema,
    userLoginSchema,
    userRegisterSchema,
    verifySchema,
  }