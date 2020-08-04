const AdRepository = require("../repository/AdRepository");
const AdNotFound = require("../domain/AdNotFound");

class AdService {
  constructor(adRepository = new AdRepository()) {
    this.adRepository = adRepository;
  }

  async findAll() {
    return this.adRepository.findAll();
  }

  async findById(id) {
    const ad = await this.adRepository.findById(id);

    if (!ad) {
      throw new AdNotFound();
    }

    return ad;
  }

  async create(ad) {
    return this.adRepository.create(ad);
  }

  async update(ad) {
    await this.findById(ad.id);
    return this.adRepository.update(ad);
  }

  async delete(id) {
    await this.findById(id);
    return this.adRepository.deleteById(id);
  }
}

module.exports = AdService;
