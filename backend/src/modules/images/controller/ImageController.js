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
    const { id, ...requestBody } = req.body;
    const createdImage = await this.imageService.create(Image.build(requestBody));
    return res.status(201).send(createdImage);
  };

  update = async (req, res) => {
    const updatedImage = await this.imageService.update(Image.build(req.body));
    return res.status(200).send(updatedImage);
  };

  delete = async (req, res) => {
    await this.imageService.delete(req.params.id);
    return res.status(200).send();
  };
}

module.exports = ImageController;
