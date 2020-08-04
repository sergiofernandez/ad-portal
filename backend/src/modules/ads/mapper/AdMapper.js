const AdType = require("../domain/AdType");
const ChaletAd = require("../domain/ChaletAd");
const FlatAd = require("../domain/FlatAd");
const FridgeAd = require("../domain/FridgeAd");
const VehicleAd = require("../domain/VehicleAd");
const InvalidAd = require("../domain/InvalidAd");

const fromPayloadToAd = (payload) => {
  ensureTypeIsValid(payload.type);

  if (payload.type === AdType.CHALET) {
    return ChaletAd.build(payload);
  } else if (payload.type === AdType.FLAT) {
    return FlatAd.build(payload);
  } else if (payload.type === AdType.FRIDGE) {
    return FridgeAd.build(payload);
  } else if (payload.type === AdType.VEHICLE) {
    return VehicleAd.build(payload);
  } else {
    throw new InvalidAd(["Type is not valid"]);
  }
};

const ensureTypeIsValid = (type) => {
  const adTypeValues = Object.values(AdType);
  if (!type || adTypeValues.indexOf(type) < 0) {
    throw new InvalidAd([`Type must be ${ adTypeValues }`]);
  }
};

module.exports = { fromPayloadToAd };
