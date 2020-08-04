class InvalidAd extends Error {
  constructor(errors) {
    super();
    this.errors = errors;
  }
}

module.exports = InvalidAd;
