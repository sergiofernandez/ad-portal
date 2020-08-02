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
    const ad = await this.adService.findById(req.params.id);
    return res.status(200).send(ad);
  };

  create = async (req, res) => {
    const ad = new Ad(null, req.body.description);
    const createdAd = await this.adService.create(ad);
    return res.status(201).send(createdAd);
  };

  update = async (req, res) => {
    const ad = new Ad(req.body.id, req.body.description);
    const updatedAd = await this.adService.update(ad);
    return res.status(200).send(updatedAd);
  };

  delete = async (req, res) => {
    const deletedAd = await this.adService.delete(req.params.id);
    return res.status(200).send(deletedAd);
  };
}

module.exports = AdController;
