const Ad = require("../../../domain/Ad");

describe("Test score calculation of the ad should", () => {

  describe("That the ad does not have any photos subtracts 10 points", () => {
    test("Without photos should return -10", () => {
      const ad = new Ad();
      expect(ad.calculateScoreOfEmptyImageIds()).toBe(-10);
    });

    test("With photos should return 0", () => {
      const ad = new Ad(1, "", "", [1]);
      expect(ad.calculateScoreOfEmptyImageIds()).toBe(0);
    });
  });

  describe("That has a description adds 5 points", () => {
    test("If no have a description should return 0", () => {
      const ad = new Ad();
      expect(ad.calculateScoreOfCompleteDescription()).toBe(0);
    });

    test("Should adds 5 points", () => {
      const ad = new Ad(1, "This is a description");
      expect(ad.calculateScoreOfCompleteDescription()).toBe(5);
    });
  });

  describe("That the following words appear in the description add 5 points each", () => {
    test("Without description should return 0", () => {
      const ad = new Ad();
      expect(ad.calculateScoreOfDescriptionKeywords()).toBe(0);
    });

    test("Two keywords should return 10", () => {
      const ad = new Ad(1, "Piso luminoso y cuidado.");
      expect(ad.calculateScoreOfDescriptionKeywords()).toBe(10);
    });

    test("All keywords should return 35", () => {
      const ad = new Ad(1, "Luminoso, Nuevo, Cuidado, Fabuloso, Único, Excepcional, Ocasión.");
      expect(ad.calculateScoreOfDescriptionKeywords()).toBe(35);
    });
  });
});
