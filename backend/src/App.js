const bodyParser = require("body-parser");
const express = require("express");
const AdsModule = require("./modules/ads/AdsModule");

class App {
  app = express();

  constructor() {
    this.config();
    this.initModules();
  }

  getApp() {
    return this.app;
  }

  config() {
    this.app.use(bodyParser.json());
  }

  initModules() {
    const adsModule = new AdsModule(this.app);
  }
}

module.exports = App;
