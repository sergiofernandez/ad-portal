const VehicleAd = require("../../../domain/VehicleAd");

describe("Test score calculation of the vehicle ad should", () => {

  describe("That the vehicle ad is complete also adds 40 points", () => {

    describe(
      "To consider a complete ad, it must have a description, at least one photo, kilometers, color and manufacturer.",
      () => {

        test("If the ad is complete, should return 40", () => {
          const vehicle = new VehicleAd(1, "aa", [1], 1000, "mazda", "mazda 3");
          expect(vehicle.calculateScoreOfCompleteAd()).toBe(40);
        });

        test("If the ad no have description and photos, should return 0", () => {
          const vehicle = new VehicleAd(1, "", [], 1000, "mazda", "mazda 3");
          expect(vehicle.calculateScoreOfCompleteAd()).toBe(0);
        });

        test("If the ad is empty, should return 0", () => {
          const vehicle = new VehicleAd();
          expect(vehicle.calculateScoreOfCompleteAd()).toBe(0);
        });
      });
  });
});
