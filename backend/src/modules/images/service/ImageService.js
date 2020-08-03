const ImageRepository = require("../repository/ImageRepository");

class ImageService {
  constructor(imageRepository = new ImageRepository()) {
    this.imageRepository = imageRepository;
  }

  async findAll() {
    return this.imageRepository.findAll();
  }
}

module.exports = ImageService;
