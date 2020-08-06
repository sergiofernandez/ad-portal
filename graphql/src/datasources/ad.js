const { RESTDataSource } = require("apollo-datasource-rest");

class AdAPI extends RESTDataSource {
  constructor() {
    super();
    const backendUrl = process.env.BACKEND_URL || "localhost";
    this.baseURL = `http://${ backendUrl }:3000/`;
  }

  async getAllAds() {
    const response = await this.get("ads");
    return Array.isArray(response) ? response : [];
  }

  async getAdById(adId) {
    return await this.get(`ads/${ adId }`);
  }
}

module.exports = AdAPI;