const bodyParser = require("body-parser");
const express = require("express");
const appErrorHandler = require("./appErrorHandler");
const AdsModule = require("./modules/ads/AdsModule");
const ImagesModule = require("./modules/images/ImagesModule");

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
    const imagesModule = new ImagesModule(this.app);
    this.app.use(appErrorHandler);
  }
}

module.exports = App;
