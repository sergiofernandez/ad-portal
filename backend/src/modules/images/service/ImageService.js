const ImageRepository = require("../repository/ImageRepository");
const ImageValidator = require("../validator/ImageValidator");
const ImageNotFound = require("../domain/ImageNotFound");

class ImageService {
  constructor(imageRepository = new ImageRepository(), imageValidator = new ImageValidator()) {
    this.imageRepository = imageRepository;
    this.imageValidator = imageValidator;
  }

  async findAll() {
    return this.imageRepository.findAll();
  }

  async findById(id) {
    const image = await this.imageRepository.findById(id);

    if (!image) {
      throw new ImageNotFound();
    }

    return image;
  }

  async create(image) {
    this.imageValidator.validate(image);
    return this.imageRepository.create(image);
  }

  async update(image) {
    this.imageValidator.validate(image);
    return this.imageRepository.update(image);
  }

  async delete(id) {
    return this.imageRepository.deleteById(id);
  }
}

module.exports = ImageService;
