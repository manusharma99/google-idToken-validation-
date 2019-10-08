const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

//CORS MIDDLEWARE
app.use(cors());

//body parser middlware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//routes
const user = require("./routes/user");
app.use("/user", user);

app.get("/", (req, res) => {
  res.json({
    status: "running"
  });
});

//port setup
port = 8888 || process.env.PORT;
app.listen(port, () => {
  console.log("server is running on port " + port);
});
