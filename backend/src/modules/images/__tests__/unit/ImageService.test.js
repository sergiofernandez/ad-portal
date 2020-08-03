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

  test("Should return a list of images", async () => {
    const images = await imageService.findAll();
    expect(images).toStrictEqual([image, otherImage]);
  });

  test("Should return a image", async () => {
    const image = await imageService.findById(1);
    expect(image).toMatchObject(image);
  });

  test("Should return a ImageNotFound exception when image is not found", async () => {
    try {
      await imageService.findById(100);
      fail("Should return a ImageNotFound exception");
    } catch (e) {
      expect(e).toBeInstanceOf(ImageNotFound);
    }
  });

  test("Should create a image", async () => {
    expect(await imageService.create(createdImagePayload)).toMatchObject(createdImage);
    expect(await imageService.findById(3)).toMatchObject(createdImage);
  });

  test("Should return InvalidImage exception when create image is not valid", async () => {
    try {
      await imageService.create(invalidImage);
      fail("Should return a InvalidImage exception");
    } catch (e) {
      expect(e).toBeInstanceOf(InvalidImage);
    }
  });

  test("Should update a image", async () => {
    expect(await imageService.update(modifiedImage)).toMatchObject(modifiedImage);
    expect(await imageService.findById(1)).toMatchObject(modifiedImage);
  });

  test("Should return ImageNotFound exception when image update image is not found", async () => {
    try {
      await imageService.update(notFoundImage);
      fail("Should return a ImageNotFound exception");
    } catch (e) {
      expect(e).toBeInstanceOf(ImageNotFound);
    }
  });

  test("Should return InvalidImage exception when update image is not valid", async () => {
    try {
      await imageService.update(otherInvalidImage);
      fail("Should return a InvalidImage exception");
    } catch (e) {
      expect(e).toBeInstanceOf(InvalidImage);
    }
  });

  test("Should delete a image", async () => {
    try {
      await imageService.delete(1);
      await imageService.findById(1);
      fail("Should throws a ImageNotFound");
    } catch (e) {
      expect(e).toBeInstanceOf(ImageNotFound);
    }
  });
});
