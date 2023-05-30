const {schema} = require('../helpers/schemas')

const validateBody=()=>{
    return((req, res, next) => {
        if (Object.keys(req.body).length === 0) {
            res.status(400).json({message: 'missing fields'})
            return;
        }
        const validationResult = schema.validate(req.body);
        const {error} = schema.validate(req.body);
        console.log(validationResult)
        if(error){
            res.status(400).json({ message: error.message })
            return;
        }
        next();
      });}

module.exports = {
    validateBody,
  }