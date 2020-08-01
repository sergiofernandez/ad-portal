const express = require("express");
const AdsModule = require("./modules/ads/AdsModule");

class App {
  app = express();

  constructor() {
    this.initModules();
  }

  initModules() {
    const adsModule = new AdsModule(this.app);
  }
}

module.exports = new App();
