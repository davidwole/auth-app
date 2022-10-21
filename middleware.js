const reqInfo = (req, res, next) => {
  console.log(req.path, req.method);
  next();
}

module.exports = {
  reqInfo
}