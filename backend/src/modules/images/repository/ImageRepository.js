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

  async findById(id) {
    return this.images.find(image => image.id === Number.parseInt(id));
  }

  async create(image) {
    const nextId = this.images.length + 1;
    const newImage = new Image(nextId, image.url, image.quality);
    this.images.push(newImage);
    return newImage;
  }
}

module.exports = ImageRepository;
