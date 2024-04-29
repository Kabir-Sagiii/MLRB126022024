import "./Header.css";
import ProductList from "../homeproductlist/ProductList";

function Header() {
  return (
    <div className="Header">
      <ProductList
        name="Grocery"
        image="https://rukminim1.flixcart.com/flap/96/96/image/29327f40e9c4d26b.png?q=100"
      />
      <ProductList
        name="Mobiles"
        image="https://rukminim1.flixcart.com/flap/96/96/image/22fddf3c7da4c4f4.png?q=100"
      />
      <ProductList
        name="Fasion"
        image="https://rukminim1.flixcart.com/fk-p-flap/96/96/image/0d75b34f7d8fbcb3.png?q=100"
      />
      <ProductList
        name="Electronics"
        image="https://rukminim1.flixcart.com/flap/96/96/image/69c6589653afdb9a.png?q=100"
      />
      <ProductList
        name="Home and Furniture"
        image="https://rukminim1.flixcart.com/flap/96/96/image/ab7e2b022a4587dd.jpg?q=100"
      />
      <ProductList
        name="Appliances"
        image="https://rukminim1.flixcart.com/flap/96/96/image/0ff199d1bd27eb98.png?q=100"
      />
      <ProductList
        name="Travel"
        image="https://rukminim1.flixcart.com/flap/96/96/image/71050627a56b4693.png?q=100"
      />
      <ProductList
        name="Beauty and Toys"
        image="https://rukminim1.flixcart.com/flap/96/96/image/dff3f7adcf3a90c6.png?q=100"
      />
      <ProductList
        name="Two Wheelers"
        image="https://rukminim1.flixcart.com/fk-p-flap/96/96/image/05d708653beff580.png?q=100"
      />
    </div>
  );
}

export default Header;
