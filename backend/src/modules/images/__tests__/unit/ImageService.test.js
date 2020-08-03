const ImageService = require("../../service/ImageService");
const InvalidImage = require("../../domain/InvalidImage");
const ImageNotFound = require("../../domain/ImageNotFound");
const {
  image,
  otherImage,
  createdImagePayload,
  createdImage,
  modifiedImage,
  invalidImage,
  otherInvalidImage,
  notFoundImage
} = require("../helpers/ImageHelper");

describe("Test the image service", () => {

  let imageService;

  beforeEach(() => {
    imageService = new ImageService();
  });

  describe("Test find all images", () => {
    test("Should return a list of images", async () => {
      const images = await imageService.findAll();

      expect(images).toHaveLength(2);
      expect(images).toContainEqual(image);
      expect(images).toContainEqual(otherImage);
    });
  });

  describe("Test find image by id", () => {
    test("Should return a image", async () => {
      expect(await imageService.findById(1)).toMatchObject(image);
    });

    test("Should throws ImageNotFound when image is not found", async () => {
      try {
        await imageService.findById(100);
        fail("Should throws ImageNotFound exception");
      } catch (e) {
        expect(e).toBeInstanceOf(ImageNotFound);
      }
    });
  });

  describe("Test create image", () => {
    test("Should create a image", async () => {
      expect(await imageService.create(createdImagePayload)).toMatchObject(createdImage);
      expect(await imageService.findById(3)).toMatchObject(createdImage);
    });

    test("Should throws InvalidImage when image payload is not valid", async () => {
      try {
        await imageService.create(invalidImage);
        fail("Should throws InvalidImage exception");
      } catch (e) {
        expect(e).toBeInstanceOf(InvalidImage);
      }
    });
  });

  describe("Test update image", () => {
    test("Should update a image", async () => {
      expect(await imageService.update(modifiedImage)).toMatchObject(modifiedImage);
      expect(await imageService.findById(1)).toMatchObject(modifiedImage);
    });

    test("Should throws ImageNotFound when image is not found", async () => {
      try {
        await imageService.update(notFoundImage);
        fail("Should throws ImageNotFound exception");
      } catch (e) {
        expect(e).toBeInstanceOf(ImageNotFound);
      }
    });

    test("Should throws InvalidImage exception when image payload is not valid", async () => {
      try {
        await imageService.update(otherInvalidImage);
        fail("Should throws InvalidImage exception");
      } catch (e) {
        expect(e).toBeInstanceOf(InvalidImage);
      }
    });
  });

  describe("Test delete image", () => {
    test("Should delete a image", async () => {
      try {
        await imageService.delete(1);
        await imageService.findById(1);
        fail("Should throws ImageNotFound exception");
      } catch (e) {
        expect(e).toBeInstanceOf(ImageNotFound);
      }
    });

    test("Should throws ImageNotFound when delete image is not found", async () => {
      try {
        await imageService.delete(100);
        fail("Should throws ImageNotFound exception");
      } catch (e) {
        expect(e).toBeInstanceOf(ImageNotFound);
      }
    });
  });
});
