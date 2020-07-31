const appHelper = require("../helpers/appHelper");

describe("Test the root path", () => {
  test("It should response the GET method", () => {
    return appHelper.get("/").expect(200, "Hello World!");
  });
});
