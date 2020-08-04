const ChaletAd = require("../domain/ChaletAd");
const FlatAd = require("../domain/FlatAd");
const FridgeAd = require("../domain/FridgeAd");
const VehicleAd = require("../domain/VehicleAd");

class AdRepository {
  ads = [];

  constructor() {
    this.ads.push(new ChaletAd(1, "Chalet description", [], 20, 100));
    this.ads.push(new FlatAd(2, "Flat description", [1], 80, 85));
    this.ads.push(new FridgeAd(3, "Fridge description", [2, 4], 5, 5));
    this.ads.push(new VehicleAd(4, "Vehicle description", [3], 70, 1000, "rojo", "mazda"));
  }

  async findAll() {
    return this.ads;
  }

  async findById(id) {
    return this.ads.find(ad => ad.id === Number.parseInt(id));
  }

  async create(ad) {
    ad.id = this.ads.length + 1;
    this.ads.push(ad);
    return ad;
  }

  async update(ad) {
    ad.id = Number.parseInt(ad.id);
    const index = this.ads.findIndex((_ad) => _ad.id === ad.id);
    this.ads[index] = ad;
    return ad;
  }

  async deleteById(id) {
    this.ads = this.ads.filter(ad => ad.id !== Number.parseInt(id));
  }
}

module.exports = AdRepository;
