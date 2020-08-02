const supertest = require("supertest");
const App = require("../../../../app");
const request = supertest(App.app);

describe("Test the ads module", () => {
  test("It should GET a list of Ads", () => {
    return request.get("/ads")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(200, [{ id: 1, description: "Awesome description 1" }, { id: 2, description: "Awesome description 2" }]);
  });

  test("It should GET a Ad filtered by id", () => {
    return request.get("/ads/1")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(200, { id: 1, description: "Awesome description 1" });
  });

  test("It should create a new Ad", () => {
    return request.post("/ads")
      .send({ description: "A description" })
      .set("Accept", "application/json")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(201, { id: 3, description: "A description" });
  });

  test("It should update an existing ad", () => {
    return request.put("/ads/1")
      .send({ id: 1, description: "A modified description" })
      .set("Accept", "application/json")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(200, { id: 1, description: "A modified description" });
  });

  test("It should delete an existing ad", () => {
    return request.delete("/ads/2")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(200, { id: 2, description: "Awesome description 2" });
  })
});
