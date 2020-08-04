const ChaletAd = require("../../../domain/ChaletAd");

describe("Test score calculation of the chalet ad should", () => {

  describe("Add 20 points if the description has 50 or more words", () => {
    test("If no have description should return 0", () => {
      const chalet = new ChaletAd(1, "");
      expect(chalet.calculateScoreOfDescriptionSize()).toBe(0);
    });

    test("If description have 50 or more words should return 20", () => {
      const chalet = new ChaletAd(1, "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
      expect(chalet.calculateScoreOfDescriptionSize()).toBe(20);
    });
  });

  describe("That the chalet ad is complete also adds 40 points", () => {

    describe("To consider a complete ad, it must have a description, at least one photo and size", () => {

      test("If the ad is complete, should return 40", () => {
        const chalet = new ChaletAd(1, "aa", [1], 200);
        expect(chalet.calculateScoreOfCompleteAd()).toBe(40);
      });

      test("If the ad no have description and photos, should return 0", () => {
        const chalet = new ChaletAd(1, "", [], 200);
        expect(chalet.calculateScoreOfCompleteAd()).toBe(0);
      });

      test("If the ad is empty, should return 0", () => {
        const chalet = new ChaletAd();
        expect(chalet.calculateScoreOfCompleteAd()).toBe(0);
      });
    });
  });
});
