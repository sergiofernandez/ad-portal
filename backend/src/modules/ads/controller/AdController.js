const AdService = require("../service/AdService");
const Ad = require("../domain/Ad");

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

  create = async (req, res) => {
    const ad = new Ad();
    const savedAd = await this.adService.save(ad);
    return res.status(201).send(savedAd);
  };
}

module.exports = AdController;
