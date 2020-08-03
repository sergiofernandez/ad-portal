const ImageRepository = require("../repository/ImageRepository");
const ImageValidator = require("../validator/ImageValidator");

class ImageService {
  constructor(imageRepository = new ImageRepository(), imageValidator = new ImageValidator()) {
    this.imageRepository = imageRepository;
    this.imageValidator = imageValidator;
  }

  async findAll() {
    return this.imageRepository.findAll();
  }

  async findById(id) {
    return this.imageRepository.findById(id);
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
