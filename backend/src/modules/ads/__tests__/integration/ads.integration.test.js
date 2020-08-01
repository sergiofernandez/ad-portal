const supertest = require("supertest");
const App = require("../../../../app");
const request = supertest(App.app);

describe("Test the ads module", () => {
  test("It should response the GET method", () => {
    return request.get("/ads").expect(200);
  });
});
