class Image {
  constructor(id, url, quality) {
    this.id = id;
    this.url = url;
    this.quality = quality;
  }

  static build({ id, url, quality }) {
    return new Image(id, url, quality);
  }
}

module.exports = Image;
