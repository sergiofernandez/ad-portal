const Ad = require("../domain/Ad");

class AdRepository {
  ads = [];

  constructor() {
    this.ads.push(new Ad(1, "Awesome description 1"));
    this.ads.push(new Ad(2, "Awesome description 2"));
  }

  async findAll() {
    return this.ads;
  }

  async findById(id) {
    return this.ads.find(ad => ad.id === id);
  }

  async create(ad) {
    const nextId = this.ads.length + 1;
    const newAd = new Ad(nextId, ad.description);
    this.ads.push(newAd);
    return newAd;
  }

  async update(ad) {
    const index = this.ads.findIndex((_ad) => _ad.id === ad.id);
    this.ads[index] = ad;
    return ad;
  }
}

module.exports = AdRepository;
