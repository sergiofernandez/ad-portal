const supertest = require("supertest");
const App = require("../../../../App");

describe("Test the images module", () => {

  let request;

  beforeEach(() => {
    request = supertest(new App().getApp());
  });

  test("It should GET a list of Images", () => {
    return request.get("/images")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(200, [{ id: 1, url: "Url 1", quality: "SD" }, { id: 2, url: "Url 2", quality: "HD" }]);
  });

  test("It should GET a Image filtered by id", () => {
    return request.get("/images/1")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(200, { id: 1, url: "Url 1", quality: "SD" });
  });

  test("It should create a new Image", () => {
    return request.post("/images")
      .send({ url: "Url 3", quality: "SD" })
      .set("Accept", "application/json")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(201, { id: 3, url: "Url 3", quality: "SD" });
  });

  test("It should update an existing Image", () => {
    return request.put("/images/1")
      .send({ id: 1, url: "A modified url", quality: "HD" })
      .set("Accept", "application/json")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(200, { id: 1, url: "A modified url", quality: "HD" });
  });
});