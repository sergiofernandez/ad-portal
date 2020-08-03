class ImagesRoutes {
  IMAGES_RESOURCE = "/images";

  constructor(app, imageController) {
    this.imageController = imageController;
    this.configureRoutes(app);
  }

  configureRoutes(app) {
    app.route(this.IMAGES_RESOURCE)
      .get(this.imageController.findAll)
      .post(this.imageController.create);
    app.route(`${ this.IMAGES_RESOURCE }/:id`)
      .get(this.imageController.findById);
  }
}

module.exports = ImagesRoutes;
