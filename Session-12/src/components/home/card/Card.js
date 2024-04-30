import "./Card.css";

function Card(props) {
  // props = { image:"",name:"",bgColor:""}
  return (
    <div className="card" style={{ backgroundColor: props.bgColor }}>
      <img src={props.image} width="280" height="200" alt="user" />
      <h3> {props.name} </h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quasi, rem
        sequi distinctio maxime aliquid iusto! Numquam, odio saepe perspiciatis
        fugiat quisquam rerum, autem eius voluptatibus ex soluta facilis. Neque.
      </p>
      <button>Profile Details</button>
    </div>
  );
}

export default Card;
