import { useState, useEffect } from "react";
import "./Products.css";
import Product from "./Product";
import axios from "axios";

function Products() {
  let [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = () => {
    //write the Logic to send request to server and get the data
    // and update data in products state
    axios
      .get("https://fakestoreapi.com/products")
      .then((productsdata) => {
        // console.log(productsdata.data);
        setProducts(productsdata.data);
      })
      .catch((errordata) => {
        alert("Error While getting the Products Data");
      });
  };

  const getElectronicsData = () => {
    setProducts([]);
    axios
      .get("https://fakestoreapi.com/products/category/electronics")
      .then((electronics) => {
        // console.log(electronics.data);
        setProducts(electronics.data);
      })
      .catch((errordata) => {
        alert("Error while Electronic Data");
      });
  };

  const getJeweleryData = () => {
    axios
      .get("https://fakestoreapi.com/products/category/jewelery")
      .then((jewelery) => {
        setProducts(jewelery.data);
      })
      .catch((errordata) => {
        alert("Error while Electronic Data");
      });
  };
  const getMenCData = () => {
    axios
      .get("https://fakestoreapi.com/products/category/men's clothing")
      .then((mens) => {
        setProducts(mens.data);
      })
      .catch((errordata) => {
        alert("Error while mens clothing Data");
      });
  };
  const getWomensCData = () => {
    axios
      .get("https://fakestoreapi.com/products/category/women's clothing")
      .then((women) => {
        setProducts(women.data);
      })
      .catch((errordata) => {
        alert("Error while Womens Clothing Data");
      });
  };

  return (
    <div className="products">
      <div className="radiosSection">
        <div className="form-check form-check-inline">
          <input
            defaultChecked
            onChange={getAllProducts}
            name="category"
            type="radio"
            className="form-check-input"
          />
          <label class="form-check-label">ALL</label>
        </div>
        <div className="form-check form-check-inline">
          <input
            onChange={getElectronicsData}
            name="category"
            type="radio"
            className="form-check-input"
          />
          <label class="form-check-label">Electronics</label>
        </div>
        <div className="form-check form-check-inline">
          <input
            onChange={getJeweleryData}
            name="category"
            type="radio"
            className="form-check-input"
          />
          <label class="form-check-label">Jewelery</label>
        </div>
        <div className="form-check form-check-inline">
          <input
            onChange={getMenCData}
            name="category"
            type="radio"
            className="form-check-input"
          />
          <label class="form-check-label">Men'sClothing</label>
        </div>
        <div className="form-check form-check-inline">
          <input
            onChange={getWomensCData}
            name="category"
            type="radio"
            className="form-check-input"
          />
          <label class="form-check-label">Women'sClothing</label>
        </div>
      </div>
      <div>
        {products.length > 0 ? (
          <div>
            {" "}
            <h4
              style={{ textAlign: "center", color: "green", marginTop: "20px" }}
            >
              Number of Products: {products.length}
            </h4>
            <div className="productsSection">
              {products.map(function (element, index) {
                return (
                  <Product
                    title={element.title}
                    image={element.image}
                    category={element.category}
                    price={element.price}
                  />
                );
              })}
            </div>
          </div>
        ) : (
          <div>
            <img
              src="https://icon-library.com/images/loading-icon-animated-gif/loading-icon-animated-gif-19.jpg"
              width={500}
              height={500}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Products;
