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

  async update(image) {
    const index = this.images.findIndex((_image) => _image.id === image.id);
    this.images[index] = image;
    return image;
  }

  async delete(id) {
    const existingImage = this.findById(id);
    this.images = this.images.filter(image => image.id !== Number.parseInt(id));
    return existingImage;
  }
}

module.exports = ImageRepository;
