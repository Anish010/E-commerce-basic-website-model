import React, { useState } from "react";
const AddProduct = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [company, setCompany] = useState("");

  const addProduct = () => {
    console.warn(name, price, category, company);
  };
  return (
    <div>
      <h1>AddProduct</h1>
      <input
        className="inputBox"
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        placeholder="Enter Product Name"
      />
      <input
        className="inputBox"
        type="text"
        value={price}
        onChange={(e) => {
          setPrice(e.target.value);
        }}
        placeholder="Enter Product Price"
      />
      <input
        className="inputBox"
        type="text"
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
        }}
        placeholder="Enter Product Category"
      />
      <input
        className="inputBox"
        type="text"
        value={company}
        onChange={(e) => {
          setCompany(e.target.value);
        }}
        placeholder="Enter Product Company"
      />
      <button onClick={addProduct} className="appButton" type="button">
        Add Product
      </button>
    </div>
  );
};

export default AddProduct;
