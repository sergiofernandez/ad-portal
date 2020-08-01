const AdRepository = require("../repository/AdRepository");

class AdService {
  constructor(adRepository = new AdRepository()) {
    this.adRepository = adRepository;
  }

  async getAds() {
    return this.adRepository.getAds();
  }
}

module.exports = AdService;
