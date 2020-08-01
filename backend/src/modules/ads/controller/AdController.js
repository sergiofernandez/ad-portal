const AdService = require("../service/AdService");

class AdController {
  constructor(adService = new AdService()) {
    this.adService = adService;
  }

  getAds = async (req, res) => {
    const ads = await this.adService.getAds();
    return res.status(200).send(ads);
  };
}

module.exports = AdController;
