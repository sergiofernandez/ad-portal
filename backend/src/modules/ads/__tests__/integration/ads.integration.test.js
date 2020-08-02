const supertest = require("supertest");
const App = require("../../../../app");
const request = supertest(App.app);

describe("Test the ads module", () => {
  test("It should GET a list of Ads", () => {
    return request.get("/ads")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(200, [{ id: 1 }, { id: 2 }]);
  });

  test("It should GET a Ad filtered by id", () => {
    return request.get("/ads/1")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(200, { id: 1 });
  });
});
