
const validateBody=(schema)=>{
    return((req, res, next) => {
        if (Object.keys(req.body).length === 0) {
            res.status(400).json({message: 'missing fields'})
            return;
        }
        const {error} = schema.validate(req.body);
        if(error){
            res.status(400).json({ message: error.message })
            return;
        }
        next();
      });}
module.exports = {
    validateBody,
  }