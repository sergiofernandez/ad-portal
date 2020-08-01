class AdsRoutes {
  ADS_RESOURCE = "/ads";

  constructor(app, adController) {
    this.adController = adController;
    this.configureRoutes(app);
  }

  configureRoutes(app) {
    app.route(this.ADS_RESOURCE)
      .get(this.adController.findAll);
  }
}

module.exports = AdsRoutes;
