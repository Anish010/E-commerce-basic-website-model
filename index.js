//importing module
const express = require("express");
require("./db/config");
//for preventing cors errors
const cors = require("cors");
//importing user file
const User = require("./db/User");
const Product = require("./db/Product");
//make express in executable form
const app = express();

//The express.json() function is a built-in middleware function in Express. It parses incoming requests with JSON payloads and is based on body-parser.
app.use(express.json());
app.use(cors());

app.post("/signup", async (req, resp) => {
  let user = new User(req.body);
  let result = await user.save();
  //convert result to object
  result = result.toObject();
  delete result.password;
  resp.send(result);
});

app.post("/login", async (req, resp) => {
  if (req.body.password && req.body.email) {
    let user = await User.findOne(req.body).select("-password");
    if (user) {
      resp.send(user);
    } else {
      resp.send({ result: "no user found" });
    }
  } else {
    resp.send({ result: "password or email is missing" });
  }
  //since we don't want password we are removing it. )thats why we used select("-passoword"). Minus here remove the password.
});

app.post("/add-product", async (req, resp) => {
  let product = new Product(req.body);
  let result = await product.save();
  resp.send(result);
});
app.listen(5000);
