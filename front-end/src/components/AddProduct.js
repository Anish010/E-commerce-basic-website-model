import React, { useState } from "react";
const AddProduct = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [company, setCompany] = useState("");
  const [error, setError] = useState(false);
  const addProduct = async () => {
    if (!name || !price || !category || !company) {
      setError(true);
      return false;
    }
    const userId = JSON.parse(localStorage.getItem("user"))._id;
    let result = await fetch("http://localhost:5000/add-product", {
      method: "post",
      body: JSON.stringify({ name, price, category, company, userId }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    result = await result.json();
    console.log(result);
  };
  return (
    <div className="AddProduct">
      <input
        className="inputBox"
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        placeholder="Enter Product Name"
      />
      {error && !name && <span className="input-error">Enter Valid Name</span>}
      <i class="fa fa-inr"></i>
      <input
        className="inputBox"
        type="text"
        value={price}
        onChange={(e) => {
          setPrice(e.target.value);
        }}
        placeholder="Enter Product Price"
      />

      {error && !price && (
        <span className="input-error">Enter Valid Price</span>
      )}
      <input
        className="inputBox"
        type="text"
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
        }}
        placeholder="Enter Product Category"
      />
      {error && !category && (
        <span className="input-error">Enter Valid Category</span>
      )}
      <input
        className="inputBox"
        type="text"
        value={company}
        onChange={(e) => {
          setCompany(e.target.value);
        }}
        placeholder="Enter Product Company"
      />
      {error && !company && (
        <span className="input-error">Enter Valid Company</span>
      )}
      <button onClick={addProduct} className="appButton" type="button">
        Add Product
      </button>
    </div>
  );
};

export default AddProduct;
