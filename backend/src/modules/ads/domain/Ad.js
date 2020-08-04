class Ad {
  constructor(id, description, type, imageIds, score) {
    this.id = id;
    this.description = description;
    this.type = type;
    this.imageIds = imageIds;
    this.score = score;
  }

  calculateScoreOfEmptyImageIds() {
    if (!this.imageIds || this.imageIds.length <= 0) {
      return -10;
    }
    return 0;
  }

  calculateScoreOfCompleteDescription() {
    if (this.description && this.description.length > 0) {
      return 5;
    }
    return 0;
  }

  calculateScoreOfDescriptionSize() {
    return 0;
  }

  calculateScoreOfDescriptionKeywords() {
    if (this.description) {
      const keywords = ["luminoso", "nuevo", "cuidado", "fabuloso", "único", "excepcional", "ocasión"];
      const lowerCasedDescription = this.description.toLowerCase();

      let score = 0;

      keywords.forEach(keyword => {
        if (lowerCasedDescription.indexOf(keyword) >= 0) {
          score += 5;
        }
      });

      return score;
    }
    return 0;
  }

  calculateScoreOfCompleteAd() {
    if (this.description && this.description.length > 0 && this.imageIds && this.imageIds.length > 0) {
      return 40;
    }
    return 0;
  }
}

module.exports = Ad;
