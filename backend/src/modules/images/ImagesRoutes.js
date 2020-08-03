class ImagesRoutes {
  IMAGES_RESOURCE = "/images";

  constructor(app, imageController) {
    this.imageController = imageController;
    this.configureRoutes(app);
  }

  configureRoutes(app) {
    app.route(this.IMAGES_RESOURCE)
      .get(this.imageController.findAll);
  }
}

module.exports = ImagesRoutes;
