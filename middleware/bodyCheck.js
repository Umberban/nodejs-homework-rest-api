const Schemas = require('../helpers/schemas')

const validateAddBody=()=>{
    return((req, res, next) => {
        if (Object.keys(req.body).length === 0) {
            res.status(400).json({message: 'missing fields'})
            return;
        }
        const validationResult = Schemas.addSchema.validate(req.body);
        const {error} = Schemas.addSchema.validate(req.body);
        console.log(validationResult)
        if(error){
            res.status(400).json({ message: error.message })
            return;
        }
        next();
      });}

const validateUpdateBody=()=>{
    return((req, res, next) => {
        const {error} = Schemas.updateSchema.validate(req.body)
        if(error){
            res.status(400).json({message: error.message})
            return;
        }
        next();
      });
   
} 
module.exports = {
    validateAddBody,
    validateUpdateBody,
  }