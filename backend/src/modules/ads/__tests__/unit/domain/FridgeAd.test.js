const FridgeAd = require("../../../domain/FridgeAd");

describe("Test score calculation of the fridge ad should", () => {

  describe("That the fridge ad is complete also adds 40 points", () => {

    describe("To consider a complete ad, it must have at least one photo and height", () => {

      test("If the ad is complete, should return 40", () => {
        const fridge = new FridgeAd(1, "aa", [1], 10);
        expect(fridge.calculateScoreOfCompleteAd()).toBe(40);
      });

      test("If the ad no have description should return 40", () => {
        const fridge = new FridgeAd(1, "", [1], 10);
        expect(fridge.calculateScoreOfCompleteAd()).toBe(40);
      });

      test("If the ad is empty, should return 0", () => {
        const fridge = new FridgeAd();
        expect(fridge.calculateScoreOfCompleteAd()).toBe(0);
      });
    });
  });
});