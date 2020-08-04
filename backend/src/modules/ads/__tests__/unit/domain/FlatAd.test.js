const FlatAd = require("../../../domain/FlatAd");

describe("Test score calculation of the flat ad should", () => {

  describe("Add 10 points if the description has 20 or more words and 30 points if it has 50 or more words", () => {
    test("If no have description should return 0", () => {
      const flat = new FlatAd(1, "");
      expect(flat.calculateScoreOfDescriptionSize()).toBe(0);
    });

    test("If description have 50 or more words should return 30", () => {
      const flat = new FlatAd(1, "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
      expect(flat.calculateScoreOfDescriptionSize()).toBe(30);
    });

    test("If description have between 20 or 49 words should return 10", () => {
      const flat = new FlatAd(1, "aaaaaaaaaaaaaaaaaaaa");
      expect(flat.calculateScoreOfDescriptionSize()).toBe(10);
    });
  });

  describe("That the flat ad is complete also adds 40 points", () => {

    describe("To consider a complete ad, it must have a description, at least one photo and size", () => {

      test("If the ad is complete, should return 40", () => {
        const flat = new FlatAd(1, "aa", [1], 200);
        expect(flat.calculateScoreOfCompleteAd()).toBe(40);
      });

      test("If the ad no have description and photos, should return 0", () => {
        const flat = new FlatAd(1, "", [], 200);
        expect(flat.calculateScoreOfCompleteAd()).toBe(0);
      });

      test("If the ad is empty, should return 0", () => {
        const flat = new FlatAd();
        expect(flat.calculateScoreOfCompleteAd()).toBe(0);
      });
    });
  });
});
