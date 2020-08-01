const AdService = require("../service/AdService");

class AdController {
  constructor(adService = new AdService()) {
    this.adService = adService;
  }

  findAll = async (req, res) => {
    const ads = await this.adService.findAll();
    return res.status(200).send(ads);
  };
}

module.exports = AdController;
