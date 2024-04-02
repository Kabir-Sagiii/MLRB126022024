import { useState } from "react";
import "./Products.css";
import Product from "./Product";
import { productsData } from "./productsData";

function Products() {
  let [products, setProducts] = useState(productsData);
  return (
    <div className="products">
      <div className="radiosSection">
        <div className="form-check form-check-inline">
          <input
            defaultChecked
            name="category"
            type="radio"
            className="form-check-input"
          />
          <label class="form-check-label">ALL</label>
        </div>
        <div className="form-check form-check-inline">
          <input name="category" type="radio" className="form-check-input" />
          <label class="form-check-label">Electronics</label>
        </div>
        <div className="form-check form-check-inline">
          <input name="category" type="radio" className="form-check-input" />
          <label class="form-check-label">Jewelery</label>
        </div>
        <div className="form-check form-check-inline">
          <input name="category" type="radio" className="form-check-input" />
          <label class="form-check-label">Men'sClothing</label>
        </div>
        <div className="form-check form-check-inline">
          <input name="category" type="radio" className="form-check-input" />
          <label class="form-check-label">Women'sClothing</label>
        </div>
      </div>
      <h4 style={{ textAlign: "center", color: "green", marginTop: "20px" }}>
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
  );
}

export default Products;
