const fs = require("fs");
const ImageModel = require("../src/modules/images/persistence/ImageModel");
const ImageSequenceModel = require("../src/modules/images/persistence/ImageSequenceModel");
const AdModel = require("../src/modules/ads/persistence/AdModel");
const AdSequenceModel = require("../src/modules/ads/persistence/AdSequenceModel");

const images = JSON.parse(fs.readFileSync("./scripts/data/images.json"));
const ads = JSON.parse(fs.readFileSync("./scripts/data/ads.json"));

const insertData = async () => {
  try {
    await ImageModel.insertMany(images);
    await new ImageSequenceModel({ id: 7 }).save();
    await AdModel.insertMany(ads);
    await new AdSequenceModel({ id: 11 }).save();
    console.log("Init DB ok");
  } catch (e) {
    console.log(e);
  }
};

module.exports = insertData;