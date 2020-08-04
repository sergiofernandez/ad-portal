const MIN_SCORE = 0;
const MAX_SCORE = 100;

const calculateScore = (ad) => {

  // TODO: Calculate score of each photo

  const score = ad.calculateScoreOfEmptyImageIds() + ad.calculateScoreOfCompleteDescription() +
    ad.calculateScoreOfDescriptionSize() + ad.calculateScoreOfDescriptionKeywords() + ad.calculateScoreOfCompleteAd();

  if (score < MIN_SCORE) {
    return MIN_SCORE;
  } else if (score > MAX_SCORE) {
    return MAX_SCORE;
  } else {
    return score;
  }
};

module.exports = { calculateScore };