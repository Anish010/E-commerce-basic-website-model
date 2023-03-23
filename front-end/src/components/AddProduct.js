import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MDBContainer, MDBInput } from "mdb-react-ui-kit";
import Button from "react-bootstrap/Button";
const AddProduct = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [company, setCompany] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const addProduct = async () => {
    if (!name || !price || !category || !company) {
      setError(true);
      return false;
    }
    const userId = JSON.parse(localStorage.getItem("user"))._id;
    console.log(userId);
    let res = await fetch("http://localhost:5000/add-product", {
      method: "post",
      body: JSON.stringify({ name, price, category, company, userId }),
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    });

    res = await res.json();
    console.warn(res);
    navigate("/");
  };
  return (
    <div style={{ marginTop: "100px" }}>
      <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
        <MDBInput
          className="addProductInput"
          wrapperClass="mb-4"
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Enter Product Name"
        />
        {error && !name && (
          <span className="input-error">Enter Valid Name</span>
        )}
        <i className="fa fa-inr"></i>
        <MDBInput
          className="addProductInput"
          wrapperClass="mb-4"
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
        <MDBInput
          className="addProductInput"
          wrapperClass="mb-4"
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
        <MDBInput
          className="addProductInput"
          wrapperClass="mb-4"
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
        <Button
          className="appButton"
          variant="primary"
          size="md"
          style={{ marginBottom: "10px" }}
          onClick={addProduct}
        >
          Add Product
        </Button>
      </MDBContainer>
    </div>
  );
};

export default AddProduct;
