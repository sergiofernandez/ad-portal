const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const appErrorHandler = require("./appErrorHandler");
const AdsModule = require("./modules/ads/AdsModule");
const ImagesModule = require("./modules/images/ImagesModule");

class App {
  app = express();
  dbClient;

  constructor() {
    this.config();
    this.initDatabase();
    this.initModules();
  }

  getApp() {
    return this.app;
  }

  config() {
    this.app.use(bodyParser.json());
  }

  initDatabase() {
    mongoose.connect("mongodb://localhost/ad-portal", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
    this.dbClient = mongoose.connection;
    this.dbClient.on("error", (error) => console.log("Database connection ERROR", error));
    this.dbClient.once("open", () => console.log("Database connection OK"));
  }

  initModules() {
    const adsModule = new AdsModule(this.app);
    const imagesModule = new ImagesModule(this.app);
    this.app.use(appErrorHandler);
  }
}

module.exports = App;
