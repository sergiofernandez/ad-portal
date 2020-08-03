const supertest = require("supertest");
const App = require("../../../../App");
const {
  imageJSON,
  otherImageJSON,
  createdImagePayload,
  createdImageJSON,
  modifiedImageJSON
} = require("../helpers/ImageHelper");

describe("Test the images module", () => {

  let request;

  beforeEach(() => {
    request = supertest(new App().getApp());
  });

  test("It should GET a list of Images", () => {
    return request.get("/images")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(200, [imageJSON, otherImageJSON]);
  });

  test("It should GET a Image filtered by id", () => {
    return request.get("/images/1")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(200, imageJSON);
  });

  test("It should create a new Image", () => {
    return request.post("/images")
      .send(createdImagePayload)
      .set("Accept", "application/json")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(201, createdImageJSON);
  });

  test("It should update an existing Image", () => {
    return request.put("/images/1")
      .send(modifiedImageJSON)
      .set("Accept", "application/json")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(200, modifiedImageJSON);
  });

  test("It should delete an existing Image", () => {
    return request.delete("/images/1")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(200, imageJSON);
  });
});