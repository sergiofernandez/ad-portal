class AdsRoutes {
  ADS_RESOURCE = "/ads";

  constructor(app, adController) {
    this.adController = adController;
    this.configureRoutes(app);
  }

  configureRoutes(app) {
    app.route(this.ADS_RESOURCE)
      .get(this.adController.findAll)
      .post(this.adController.create);
    app.route(`${ this.ADS_RESOURCE }/:id`)
      .get(this.adController.findById)
      .put(this.adController.update)
      .delete(this.adController.delete);
  }
}

module.exports = AdsRoutes;
