const Ad = require("../domain/Ad");

class AdRepository {
  async getAds() {
    const ad1 = new Ad(1);
    const ad2 = new Ad(2);
    const ad3 = new Ad(3);
    const ad4 = new Ad(4);
    const ad5 = new Ad(5);
    return [ad1, ad2, ad3, ad4, ad5];
  }
}

module.exports = AdRepository;
