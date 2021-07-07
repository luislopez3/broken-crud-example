const express = require("express");
let { companies } = require("./index");
const app = express();
const cors = require("cors");

app.use(cors());

app.use(express.json());

app.use("/companies", companies);

app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
