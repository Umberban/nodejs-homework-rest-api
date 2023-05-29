const Schemas = require('../helpers/schemas')

const validateAddBody=()=>{
    return((req, res, next) => {
        const {error} = Schemas.addSchema.validate(req.body)
        if(error){
            res.status(400).json({ message: error.message })
            
        }
        next();
      });}

const validateUpdateBody=(body)=>{
    return((req, res, next) => {
        const {error} = Schemas.updateSchema.validate(req.body)
        if(error){
            res.status(400).json({message: 'missing fields'})
        }
        next();
      });
   
} 
module.exports = {
    validateAddBody,
    validateUpdateBody,
  }