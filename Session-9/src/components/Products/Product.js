import React from "react";
import "./Product.css";

function Product({ title, image, category, price }) {
  //props={title:"",image:""}
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
      <button className="btn btn-outline-success">Product Details</button>
    </div>
  );
}

export default Product;
