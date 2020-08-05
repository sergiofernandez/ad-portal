const App = require("./App");
const app = new App();
const initDb = require("../scripts/initDb");

app.getApp().listen(3000, async () => {
  await initDb();
  console.log("Server running on port 3000");
});
