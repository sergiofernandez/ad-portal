const { RESTDataSource } = require("apollo-datasource-rest");

class ImageAPI extends RESTDataSource {
  constructor() {
    super();
    const backendUrl = process.env.BACKEND_URL || "localhost";
    this.baseURL = `http://${ backendUrl }:3000/`;
  }

  async getImageById(imageId) {
    return await this.get(`images/${ imageId }`);
  }

  getImagesByIds(imageIds) {
    return Promise.all(imageIds.map(imageId => this.getImageById(imageId)));
  }
}

module.exports = ImageAPI;