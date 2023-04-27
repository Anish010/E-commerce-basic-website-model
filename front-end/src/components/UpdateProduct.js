import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MDBContainer, MDBInput } from "mdb-react-ui-kit";
import Button from "react-bootstrap/Button";
const UpdateProduct = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [company, setCompany] = useState("");
    const [error, setError] = useState(false);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getProductDetails();
    // eslint-disable-next-line
  }, []);

  const getProductDetails = async () => {
    console.warn(params);
    let result = await fetch(`http://localhost:5000/product/${params.id}`, {
      headers: {
        authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    });
    result = await result.json();
    setName(result.name);
    setCategory(result.category);
    setPrice(result.price);
    setCompany(result.company);
  };

  const updateProduct = async () => {
    if (!name || !price || !category || !company) {
      setError(true);
      return false;
    }
    let result = await fetch(`http://localhost:5000/product/${params.id}`, {
      method: "Put",
      body: JSON.stringify({ name, category, price, company }),
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    });
    result = await result.json();
    console.warn(result);
    navigate("/");
  };

  return (
    // <div className="addProduct">
    //   <h1>Update Product</h1>

    //   <input
    //     className="inputBox"
    //     type="text"
    //     value={name}
    //     onChange={(e) => {
    //       setName(e.target.value);
    //     }}
    //     placeholder="Enter Product Name"
    //   />

    //   <i className="fa fa-inr"></i>
    //   <input
    //     className="inputBox"
    //     type="text"
    //     value={price}
    //     onChange={(e) => {
    //       setPrice(e.target.value);
    //     }}
    //     placeholder="Enter Product Price"
    //   />

    //   <input
    //     className="inputBox"
    //     type="text"
    //     value={category}
    //     onChange={(e) => {
    //       setCategory(e.target.value);
    //     }}
    //     placeholder="Enter Product Category"
    //   />

    //   <input
    //     className="inputBox"
    //     type="text"
    //     value={company}
    //     onChange={(e) => {
    //       setCompany(e.target.value);
    //     }}
    //     placeholder="Enter Product Company"
    //   />
    //   <button onClick={updateProduct} className="appButton" type="button">
    //     Update Product
    //   </button>
    // </div>
    <div style={{ marginTop: "100px" }}>
      <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
        <MDBInput
          className="updateProductInput"
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
          className="updateProductInput"
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
          className="updateProductInput"
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
          className="updateProductInput"
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
          onClick={updateProduct}
        >
          Update
        </Button>
      </MDBContainer>
    </div>
  );
};

export default UpdateProduct;
