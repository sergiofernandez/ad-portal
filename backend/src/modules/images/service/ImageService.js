const ImageRepository = require("../repository/ImageRepository");

class ImageService {
  constructor(imageRepository = new ImageRepository()) {
    this.imageRepository = imageRepository;
  }

  async findAll() {
    return this.imageRepository.findAll();
  }

  async findById(id) {
    return this.imageRepository.findById(id);
  }

  async create(image) {
    return this.imageRepository.create(image);
  }

  async update(image) {
    return this.imageRepository.update(image);
  }
}

module.exports = ImageService;
