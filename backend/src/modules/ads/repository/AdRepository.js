const Ad = require("../domain/Ad");

class AdRepository {
  ads = [];

  constructor() {
    this.ads.push(new Ad(1));
    this.ads.push(new Ad(2));
  }

  async findAll() {
    return this.ads;
  }

  async findById(id) {
    return this.ads.find(ad => ad.id === id);
  }

  async save(ad) {
    const nextId = this.ads.length + 1;
    const newAd = new Ad(nextId);
    this.ads.push(newAd);
    return newAd;
  }
}

module.exports = AdRepository;
