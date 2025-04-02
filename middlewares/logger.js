function logger(req, res, next) {
    const { method, protocol, host, url } = req;
    console.log(method, protocol + '://' + host + url);
    next();
  };
  
module.exports = logger;