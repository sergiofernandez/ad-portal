const InvalidImage = require("../domain/InvalidImage");
const ImageQuality = require("../domain/ImageQuality");

class ImageValidator {
  validate(image) {
    let errors = [];

    errors.push(this.ensureUrlIsRequired(image));
    errors.push(this.ensureQualityIsRequired(image));
    errors.push(this.ensureQualityIsValid(image));

    errors = errors.filter((error) => error);

    if (errors.length > 0) {
      throw new InvalidImage(errors);
    }
  }

  ensureUrlIsRequired(image) {
    if (!image.url || image.url.length <= 0) {
      return "Url is required";
    }
  }

  ensureQualityIsRequired(image) {
    if (!image.quality || image.quality.length <= 0) {
      return "Quality is required";
    }
  }

  ensureQualityIsValid(image) {
    const imageQualityValues = Object.values(ImageQuality);
    if (imageQualityValues.indexOf(image.quality) < 0) {
      return `Quality must be ${ imageQualityValues }`;
    }
  }
}

module.exports = ImageValidator;
