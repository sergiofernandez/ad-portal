const Ad = require("./Ad");
const AdType = require("./AdType");

class FridgeAd extends Ad {
  constructor(id, description, imageIds, score, height) {
    super(id, description, AdType.FRIDGE, imageIds, score);
    this.height = height;
  }

  static build({ id, description, imageIds, score, height }) {
    return new FridgeAd(id, description, imageIds, score, height);
  }

  calculateScoreOfCompleteAd() {
    if (this.imageIds && this.imageIds.length > 0 && this.height && this.height > 0) {
      return 40;
    }
    return 0;
  }
}

module.exports = FridgeAd;
