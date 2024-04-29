import "./ProductList.css";
function ProductList(props) {
  return (
    <div className="ProductList">
      <img src={props.image} width="70" height="70" />
      <h6 style={{ fontSize: "15px" }}>{props.name}</h6>
    </div>
  );
}

export default ProductList;
