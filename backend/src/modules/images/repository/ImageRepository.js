const Image = require("../domain/Image");
const ImageModel = require("../persistence/ImageModel");
const ImageSequenceModel = require("../persistence/ImageSequenceModel");

class ImageRepository {

  async findAll() {
    const images = await ImageModel.find();
    return images.map(image => Image.build(image));
  }

  async findById(id) {
    const image = await ImageModel.findOne({ id });

    if (!image) {
      return undefined;
    }

    return Image.build(image);
  }

  async create(image) {
    const nextId = await ImageSequenceModel.getNextId();
    const createdImageModel = await ImageModel.create({ ...image, id: nextId });
    return Image.build(createdImageModel);
  }

  async update(image) {
    await ImageModel.updateOne({ id: image.id }, { ...image });
    return image;
  }

  async deleteById(id) {
    await ImageModel.deleteOne({ id });
  }
}

module.exports = ImageRepository;
