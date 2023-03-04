import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MDBCol } from "mdbreact";
import Table from "react-bootstrap/Table";
import { MdDelete, MdModeEditOutline } from "react-icons/md";
function ProductList() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    let result = await fetch("http://localhost:5000/products", {
      headers: {
        authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    });
    result = await result.json();
    setProducts(result);
  };

  const deleteProduct = async (id) => {
    let result = await fetch(`http://localhost:5000/product/${id}`, {
      method: "Delete",
      headers: {
        authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    });
    result = await result.json();
    if (result) {
      getProducts();
    }
  };

  const searchHandle = async (event) => {
    let key = event.target.value;
    if (key) {
      let result = await fetch(`http://localhost:5000/search/${key}`, {
        headers: {
          authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      });
      result = await result.json();
      if (result) {
        setProducts(result);
      }
    } else {
      getProducts();
    }
  };

  return (
    <>
      <div className="product-list">
        <MDBCol
          className="search-product-box "
          style={{ marginBottom: "20px" }}
        >
          <input
            className="form-control form-control-sm input-search"
            type="text"
            style={{
              backgroundColor: "#a8e4f5",
              color: "black",
              fontWeight: "bold",
              fontSize: "15px",
            }}
            placeholder="Search"
            aria-label="Search"
            onChange={searchHandle}
          />
        </MDBCol>
        <div className="item-list">
          <Table bordered hover>
            <thead style={{ position: "sticky", top: "0" }}>
              <>
                <th>#</th>
                <th>Name</th>
                <th>Price</th>
                <th>Category</th>
                <th>Company</th>
                <th>Action</th>
              </>
            </thead>

            <tbody>
              {products.length > 0 ? (
                products.map((item, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>${item.price}</td>
                    <td>{item.category}</td>
                    <td>{item.company}</td>
                    <td>
                      <MdDelete
                        style={{ fontSize: "25px" }}
                        onClick={() => deleteProduct(item._id)}
                      />
                      <Link to={`/update/${item._id}`}>
                        <MdModeEditOutline style={{ fontSize: "25px" }} />
                      </Link>
                    </td>
                  </tr>
                ))
              ) : (
                <h1>No Products Found</h1>
              )}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default ProductList;
