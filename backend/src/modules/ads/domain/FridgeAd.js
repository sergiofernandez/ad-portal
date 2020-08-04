const Ad = require("./Ad");
const AdType = require("./AdType");

class FridgeAd extends Ad {
  constructor(id, description, imageIds, height) {
    super(id, description, AdType.FRIDGE, imageIds);
    this.height = height;
  }

  static build({ id, description, imageIds, height }) {
    return new FridgeAd(id, description, imageIds, height);
  }

  calculateScoreOfCompleteAd() {
    if (this.imageIds && this.imageIds.length > 0 && this.height && this.height > 0) {
      return 40;
    }
    return 0;
  }
}

module.exports = FridgeAd;
