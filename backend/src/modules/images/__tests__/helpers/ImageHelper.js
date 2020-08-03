const Image = require("../../domain/Image");
const ImageQuality = require("../../domain/ImageQuality");

const createImage = (id, url, quality) => new Image(id, url, quality);
const createImageJSON = (id, url, quality) => ({ id, url, quality });
const createImagePayload = (url, quality) => ({ url, quality });

const image = createImage(1, "Url 1", ImageQuality.SD);
const imageJSON = createImageJSON(1, "Url 1", ImageQuality.SD);

const otherImage = createImage(2, "Url 2", ImageQuality.HD);
const otherImageJSON = createImageJSON(2, "Url 2", ImageQuality.HD);

const createdImagePayload = createImagePayload("Url 3", ImageQuality.SD);

const createdImage = createImage(3, "Url 3", ImageQuality.SD);
const createdImageJSON = createImageJSON(3, "Url 3", ImageQuality.SD);

const modifiedImage = createImage(1, "A modified url", ImageQuality.HD);
const modifiedImageJSON = createImageJSON(1, "A modified url", ImageQuality.HD);

const invalidImage = createImage();

const otherInvalidImage = createImage(1, "Url", "QUALITY");

const notFoundImage = createImage(100, "Url", ImageQuality.SD);

module.exports = {
  image,
  imageJSON,
  otherImage,
  otherImageJSON,
  createdImagePayload,
  createdImage,
  createdImageJSON,
  modifiedImage,
  modifiedImageJSON,
  invalidImage,
  otherInvalidImage,
  notFoundImage
};