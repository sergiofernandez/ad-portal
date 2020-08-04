const AdService = require("../service/AdService");
const { fromPayloadToAd } = require("../mapper/AdMapper");

class AdController {
  constructor(adService = new AdService()) {
    this.adService = adService;
  }

  findAll = async (req, res, next) => {
    try {
      const ads = await this.adService.findAll();
      return res.status(200).send(ads);
    } catch (e) {
      next(e);
    }
  };

  findById = async (req, res, next) => {
    try {
      const ad = await this.adService.findById(req.params.id);
      return res.status(200).send(ad);
    } catch (e) {
      next(e);
    }
  };

  create = async (req, res, next) => {
    try {
      const { id, ...requestBody } = req.body;
      const createdAd = await this.adService.create(fromPayloadToAd(requestBody));
      return res.status(201).send(createdAd);
    } catch (e) {
      next(e);
    }
  };

  update = async (req, res, next) => {
    try {
      const requestBody = { ...req.body, id: req.params.id };
      const updatedAd = await this.adService.update(fromPayloadToAd(requestBody));
      return res.status(200).send(updatedAd);
    } catch (e) {
      next(e);
    }
  };

  delete = async (req, res, next) => {
    try {
      await this.adService.delete(req.params.id);
      return res.status(200).send();
    } catch (e) {
      next(e);
    }
  };
}

module.exports = AdController;
