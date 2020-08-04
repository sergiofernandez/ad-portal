const { fromPayloadToAd } = require("../mapper/AdMapper");
const AdModel = require("../persistence/AdModel");
const AdSequenceModel = require("../persistence/AdSequenceModel");

class AdRepository {

  async findAll() {
    const ads = await AdModel.find();
    return ads.map(ad => fromPayloadToAd(ad));
  }

  async findById(id) {
    const ad = await AdModel.findOne({ id });

    if (!ad) {
      return undefined;
    }

    return fromPayloadToAd(ad);
  }

  async create(ad) {
    const nextId = await AdSequenceModel.getNextId();
    const createdAdModel = await AdModel.create({ ...ad, id: nextId });
    return fromPayloadToAd(createdAdModel);
  }

  async update(ad) {
    await AdModel.updateOne({ id: ad.id }, { ...ad });
    return ad;
  }

  async deleteById(id) {
    await AdModel.deleteOne({ id });
  }
}

module.exports = AdRepository;
