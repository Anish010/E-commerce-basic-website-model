//importing module
const express = require("express");
require("./db/config");
//for preventing cors errors
const cors = require("cors");
//importing user file
const User = require("./db/User");

//make express in executable form
const app = express();

//The express.json() function is a built-in middleware function in Express. It parses incoming requests with JSON payloads and is based on body-parser.
app.use(express.json());
app.use(cors());

app.post("/signup", async (req, resp) => {
  let user = new User(req.body);
  let result = await user.save();
  resp.send(result);
});

app.listen(5000);
