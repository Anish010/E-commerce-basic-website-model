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
app.get("/products", async (req, resp) => {
  let products = await Product.find();
  if (products.length > 0) {
    resp.send(products);
  } else {
    resp.send({ result: "No Products Found" });
  }
});

app.delete("/product/:id", async (req, resp) => {
  let result = await Product.deleteOne({ _id: req.params.id });
  resp.send(result);
});

app.get("/product/:id", async (req, resp) => {
  let result = await Product.findOne({ _id: req.params.id });
  if (result) {
    resp.send(result);
  } else {
    resp.send({ result: "No Product found" });
  }
});

app.put("/product/:id", async (req, resp) => {
  let result = await Product.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  );
  resp.send(result);
});

app.get("/search/:key", async (req, resp) => {
  const regex = new RegExp(req.params.key, "i");
  let result = await Product.find({
    $or: [
      {
        name: regex,
      },
      {
        company: regex,
      },
      {
        category: regex,
      },
    ],
  });
  resp.send(result);
});

/*app.get("/search/:key", async (req, resp) => {
  let result = await Product.find({
    name: { $regrex: "" + req.params.key },
  });
  resp.send(result);
});*/
app.listen(5000);
