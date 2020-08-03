const ImageService = require("../../service/ImageService");
const InvalidImage = require("../../domain/InvalidImage");
const {
  image,
  otherImage,
  createdImagePayload,
  createdImage,
  modifiedImage,
  invalidImage
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

  test("Should return InvalidImage exception when update image is not valid", async() => {
    try {
      await imageService.update(invalidImage);
      fail("Should return a InvalidImage exception");
    } catch (e) {
      expect(e).toBeInstanceOf(InvalidImage);
    }
  })

  test("Should delete a image", async () => {
    await imageService.delete(1);
    expect(await imageService.findById(1)).toBeUndefined();
  });
});
