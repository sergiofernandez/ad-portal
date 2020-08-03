class InvalidImage extends Error {
  constructor(errors) {
    super();
    this.errors = errors;
  }
}

module.exports = InvalidImage;
