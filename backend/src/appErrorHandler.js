const ImageNotFound = require("./modules/images/domain/ImageNotFound");
const InvalidImage = require("./modules/images/domain/InvalidImage");

const appErrorHandler = (err, req, res, next) => {
  if (err instanceof ImageNotFound) {
    return res.status(404).send();
  } else if (err instanceof InvalidImage) {
    return res.status(400).send(err.errors);
  }

  return res.status(500).send();
};

module.exports = appErrorHandler;
