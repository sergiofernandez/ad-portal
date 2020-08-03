const ImageValidator = require("../../validator/ImageValidator");
const { image, invalidImage } = require("../helpers/ImageHelper");

describe("Test the image validator", () => {

  let imageValidator;

  beforeEach(() => {
    imageValidator = new ImageValidator();
  });

  test("Should validate a valid image", () => {
    try {
      imageValidator.validate(image);
    } catch {
      fail("Should be a valid image");
    }
  });

  test("Should return a InvalidImage with list of errors", () => {
    try {
      imageValidator.validate(invalidImage);
      fail("Should throws InvalidImage");
    } catch (e) {
      const errors = e.errors;
      expect(errors).toContain("Url is required");
      expect(errors).toContain("Quality is required");
      expect(errors).toContain("Quality must be SD,HD");
    }
  });
});