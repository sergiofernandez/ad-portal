const AdService = require("../service/AdService");

class AdController {
  constructor(adService = new AdService()) {
    this.adService = adService;
  }

  findAll = async (req, res) => {
    const ads = await this.adService.findAll();
    return res.status(200).send(ads);
  };

  findById = async (req, res) => {
    const id = Number.parseInt(req.params.id);
    const ad = await this.adService.findById(id);
    return res.status(200).send(ad);
  };
}

module.exports = AdController;
