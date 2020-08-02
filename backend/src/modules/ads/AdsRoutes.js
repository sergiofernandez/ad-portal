class AdsRoutes {
  ADS_RESOURCE = "/ads";

  constructor(app, adController) {
    this.adController = adController;
    this.configureRoutes(app);
  }

  configureRoutes(app) {
    app.route(this.ADS_RESOURCE)
      .get(this.adController.findAll);
    app.route(`${this.ADS_RESOURCE}/:id`)
      .get(this.adController.findById);
  }
}

module.exports = AdsRoutes;
