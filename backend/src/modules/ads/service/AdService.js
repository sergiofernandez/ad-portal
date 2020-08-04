const AdRepository = require("../repository/AdRepository");
const AdNotFound = require("../domain/AdNotFound");
const { calculateScore } = require("./ScoreCalculator");

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
    ad.score = calculateScore(ad);
    return this.adRepository.create(ad);
  }

  async update(ad) {
    await this.findById(ad.id);
    ad.score = calculateScore(ad);
    return this.adRepository.update(ad);
  }

  async delete(id) {
    await this.findById(id);
    return this.adRepository.deleteById(id);
  }
}

module.exports = AdService;
