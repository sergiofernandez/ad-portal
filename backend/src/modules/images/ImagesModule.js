const ImageController = require("./controller/ImageController");
const ImagesRoutes = require("./ImagesRoutes");

class ImagesModule {
  constructor(app) {
    this.routes = new ImagesRoutes(app, new ImageController());
  }
}

module.exports = ImagesModule;
