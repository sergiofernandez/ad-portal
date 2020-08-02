class AdsRoutes {
  ADS_RESOURCE = "/ads";

  constructor(app, adController) {
    this.adController = adController;
    this.configureRoutes(app);
  }

  configureRoutes(app) {
    app.route(this.ADS_RESOURCE)
      .get(this.adController.findAll);
    app.route(`${ this.ADS_RESOURCE }/:id`)
      .get(this.adController.findById);
    app.route(this.ADS_RESOURCE)
      .post(this.adController.create);
    app.route(`${ this.ADS_RESOURCE }/:id`)
      .put(this.adController.update);
    app.route(`${ this.ADS_RESOURCE }/:id`)
      .delete(this.adController.delete);
  }
}

module.exports = AdsRoutes;
