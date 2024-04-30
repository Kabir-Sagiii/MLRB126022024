import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./productDetails.css";
import axios from "axios";

function ProductDetails() {
  let { id } = useParams(); // { id:3}
  let [state, setState] = useState({
    id: null,
    title: null,
    description: null,
    price: null,
    category: null,
    image: "",
    rating: { rate: null, count: null },
  });

  useEffect(() => {
    getProductData();
  }, []);

  const getProductData = () => {
    //implement code to get product data based on id from server
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((productInfo) => {
        setState(productInfo.data);
      })
      .catch((error) => {
        console.log(error);
        alert("error while getting specific product data");
      });
  };
  return (
    <div className="productDContainer  p-3">
      <div className="imageContainer">
        <img src={state.image} width={"100%"} height={"80%"} />
      </div>
      <div className="contentContainer">
        <dl>
          <dt>Product Title</dt>
          <dd>{state.title}</dd>
          <dt>Price</dt>
          <dd>${state.price}</dd>
          <dt>Description</dt>
          <dd>{state.description}</dd>
          <dt>Category Name</dt>
          <dd>{state.category}</dd>
          <dt>Rating</dt>
          <dd>{state.rating.rate}</dd>
        </dl>
        <button className="btn btn-outline-dark">Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductDetails;
