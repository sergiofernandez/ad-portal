const Ad = require("./Ad");
const AdType = require("./AdType");

class FlatAd extends Ad {
  constructor(id, description, imageIds, size) {
    super(id, description, AdType.FLAT, imageIds);
    this.size = size;
  }

  calculateScoreOfDescriptionSize() {
    if (this.description) {
      if (this.description.length >= 50) {
        return 30;
      } else if (this.description.length >= 20) {
        return 10;
      }
    }
    return 0;
  }

  calculateScoreOfCompleteAd() {
    if (super.calculateScoreOfCompleteAd() > 0 && this.size && this.size > 0) {
      return 40;
    }
    return 0;
  }
}

module.exports = FlatAd;
