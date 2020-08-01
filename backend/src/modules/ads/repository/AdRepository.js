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
}

module.exports = AdRepository;
