const Image = require("../domain/Image");
const ImageQuality = require("../domain/ImageQuality");
const ImageModel = require("../persistence/ImageModel");

class ImageRepository {
  images = [];

  constructor() {
    this.images.push(new Image(1, "Url 1", ImageQuality.SD));
    this.images.push(new Image(2, "Url 2", ImageQuality.HD));
  }

  async findAll() {
    const images = await ImageModel.find();
    return images.map(image => Image.build(image));
  }

  async findById(id) {
    const image = await ImageModel.findOne({ _id: id });
    return Image.build(image);
  }

  async create(image) {
    return Image.build(await ImageModel.create({ url: image.url }));
  }

  async update(image) {
    image.id = Number.parseInt(image.id);
    const index = this.images.findIndex((_image) => _image.id === image.id);
    this.images[index] = image;
    return image;
  }

  async deleteById(id) {
    this.images = this.images.filter(image => image.id !== Number.parseInt(id));
  }
}

module.exports = ImageRepository;
