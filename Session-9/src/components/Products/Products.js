import { useState } from "react";
import "./Products.css";
import { productsData } from "./productsData";

function Products() {
  let [products, setProducts] = useState(productsData);
  return (
    <div className="products">
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
  );
}

export default Products;
