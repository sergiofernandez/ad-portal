const ImageService = require("../service/ImageService");

class ImageController {
  constructor(imageService = new ImageService()) {
    this.imageService = imageService;
  }

  findAll = async (req, res) => {
    const images = await this.imageService.findAll();
    return res.status(200).send(images);
  };
}

module.exports = ImageController;
