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

  async create(ad) {
    return this.adRepository.create(ad);
  }

  async update(ad) {
    return this.adRepository.update(ad);
  }
}

module.exports = AdService;
