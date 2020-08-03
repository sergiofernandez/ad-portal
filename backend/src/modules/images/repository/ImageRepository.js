const Image = require("../domain/Image");
const ImageQuality = require("../domain/ImageQuality");

class ImageRepository {
  images = [];

  constructor() {
    this.images.push(new Image(1, "Url 1", ImageQuality.SD));
    this.images.push(new Image(2, "Url 2", ImageQuality.HD));
  }

  async findAll() {
    return this.images;
  }
}

module.exports = ImageRepository;
