const supertest = require("supertest");
const App = require("../../../../App");
const {
  imageJSON,
  otherImageJSON,
  createdImagePayload,
  createdImageJSON,
  modifiedImageJSON,
  invalidImageJSON,
  notFoundImageJSON,
  otherInvalidImageJSON
} = require("../helpers/ImageHelper");

describe("Test the images module", () => {

  let request;

  beforeEach(() => {
    request = supertest(new App().getApp());
  });

  describe("Test find all images", () => {
    test("It should return a list of images", () => {
      return request.get("/images")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(200, [imageJSON, otherImageJSON]);
    });
  });

  describe("Test find image filtered by id", () => {
    test("It should return a image filtered by id", () => {
      return request.get("/images/1")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(200, imageJSON);
    });

    test("It should return not found error", () => {
      return request.get("/images/100").expect(404);
    });
  });

  describe("Test create image", () => {
    test("It should create a new Image", () => {
      return request.post("/images")
      .send(createdImagePayload)
      .set("Accept", "application/json")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(201, createdImageJSON);
    });

    test("It should return bad request error", () => {
      return request.post("/images")
      .send(invalidImageJSON)
      .set("Accept", "application/json")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(400, ["Url is required", "Quality is required", "Quality must be SD,HD"]);
    });
  });

  describe("Test update image", () => {
    test("It should update an existing Image", () => {
      return request.put("/images/1")
      .send(modifiedImageJSON)
      .set("Accept", "application/json")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(200, modifiedImageJSON);
    });

    test("It should return not found error", () => {
      return request.put("/images/100")
      .send(notFoundImageJSON)
      .set("Accept", "application/json")
      .expect(404);
    });

    test("It should return bad request error", () => {
      return request.put("/images/1")
      .send(otherInvalidImageJSON)
      .set("Accept", "application/json")
      .expect(400, ["Quality must be SD,HD"]);
    });
  });

  describe("Test delete image", () => {
    test("It should delete an existing Image", () => {
      return request.delete("/images/1").expect(200);
    });

    test("It should return not found error", () => {
      return request.delete("/images/100").expect(404);
    });
  });
});