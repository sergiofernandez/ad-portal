const ImageService = require("../service/ImageService");
const Image = require("../domain/Image");

class ImageController {
  constructor(imageService = new ImageService()) {
    this.imageService = imageService;
  }

  findAll = async (req, res, next) => {
    try {
      const images = await this.imageService.findAll();
      return res.status(200).send(images);
    } catch (e) {
      next(e);
    }
  };

  findById = async (req, res, next) => {
    try {
      const image = await this.imageService.findById(req.params.id);
      return res.status(200).send(image);
    } catch (e) {
      next(e);
    }
  };

  create = async (req, res, next) => {
    try {
      const { id, ...requestBody } = req.body;
      const createdImage = await this.imageService.create(Image.build(requestBody));
      return res.status(201).send(createdImage);
    } catch (e) {
      next(e);
    }
  };

  update = async (req, res, next) => {
    try {
      const updatedImage = await this.imageService.update(Image.build(req.body));
      return res.status(200).send(updatedImage);
    } catch (e) {
      next(e);
    }
  };

  delete = async (req, res, next) => {
    try {
      await this.imageService.delete(req.params.id);
      return res.status(200).send();
    } catch (e) {
      next(e);
    }
  };
}

module.exports = ImageController;
