const express = require("express");
const path = require("path");

const app = express();

app.use("/", express.static(path.join(__dirname, "pubblic")));

app.listen(3000, () => {
  console.log("Application is ready at http://localhost:3000");
});
