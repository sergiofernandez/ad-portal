const AdRepository = require("../repository/AdRepository");

class AdService {
  constructor(adRepository = new AdRepository()) {
    this.adRepository = adRepository;
  }

  async findAll() {
    return this.adRepository.findAll();
  }

  async findById(id) {
    return this.adRepository.findById(id);
  }

  async save(ad) {
    return this.adRepository.save(ad);
  }
}

module.exports = AdService;
