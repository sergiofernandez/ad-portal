const ImageService = require("../service/ImageService");
const Image = require("../domain/Image");

class ImageController {
  constructor(imageService = new ImageService()) {
    this.imageService = imageService;
  }

  findAll = async (req, res) => {
    const images = await this.imageService.findAll();
    return res.status(200).send(images);
  };

  findById = async (req, res) => {
    const image = await this.imageService.findById(req.params.id);
    return res.status(200).send(image);
  };

  create = async (req, res) => {
    const image = new Image(null, req.body.url, req.body.quality);
    const createImage = await this.imageService.create(image);
    return res.status(201).send(createImage);
  };

  update = async (req, res) => {
    const image = new Image(req.body.id, req.body.url, req.body.quality);
    const updatedImage = await this.imageService.update(image);
    return res.status(200).send(updatedImage);
  };

  delete = async (req, res) => {
    const deletedImage = await this.imageService.delete(req.params.id);
    return res.status(200).send(deletedImage);
  };
}

module.exports = ImageController;
