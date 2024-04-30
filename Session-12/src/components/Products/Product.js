import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";

function Product({ title, image, category, price, id }) {
  //props={title:"",image:""}
  console.log(id);
  return (
    <div className="productsCard">
      <img src={image} width={"100%"} height={200} />
      <p>
        <b>{title}</b>
      </p>
      <p>${price}</p>
      <p>
        <b>{category}</b>
      </p>
      <Link to={`/productdetails/${id}`}>
        <button className="btn btn-outline-success">Product Details</button>
      </Link>
    </div>
  );
}

export default Product;
