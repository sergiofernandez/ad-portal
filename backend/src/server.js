const App = require("./App");
const app = new App();

app.getApp().listen(3000, async () => {
  console.log("Server running on port 3000");
});
