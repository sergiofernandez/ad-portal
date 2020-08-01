const AdController = require("./controller/AdController");
const AdsRoutes = require("./AdsRoutes");

class AdsModule {
  constructor(app) {
    this.routes = new AdsRoutes(app, new AdController());
  }
}

module.exports = AdsModule;
