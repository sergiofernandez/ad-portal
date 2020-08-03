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
});