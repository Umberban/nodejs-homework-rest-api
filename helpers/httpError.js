const httpError = (status,message)=>{
    const err = new Error(message);
    err.status = status;
}
module.exports = {
    httpError,
  }