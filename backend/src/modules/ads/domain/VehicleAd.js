const Ad = require("./Ad");
const AdType = require("./AdType");

class VehicleAd extends Ad {
  constructor(id, description, imageIds, score, km, color, fabricant) {
    super(id, description, AdType.VEHICLE, imageIds, score);
    this.km = km;
    this.color = color;
    this.fabricant = fabricant;
  }

  static build({ id, description, imageIds, score, km, color, fabricant }) {
    return new VehicleAd(id, description, imageIds, score, km, color, fabricant);
  }

  calculateScoreOfCompleteAd() {
    if (super.calculateScoreOfCompleteAd() > 0 && this.km && this.km > 0 && this.color && this.color.length > 0
      && this.fabricant && this.fabricant.length > 0) {
      return 40;
    }
    return 0;
  }
}

module.exports = VehicleAd;
