import "./section3.css";

function Section3(props) {
  return (
    <div className="Section3">
      <div>
        <img src={props.image} width="500" height="300" alt="product" />
      </div>
      <div className="section3Content">
        <h2>{props.title}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
          quaerat sapiente quia. Delectus iste, quos, eum sequi ea asperiores
          laudantium aperiam, aliquam saepe sit animi mollitia. Tempore, atque
          deleniti veritatis quaerat corrupti facere autem ipsum voluptatem sint
          debitis harum quo et nihil corporis, delectus possimus fugiat nesciunt
          asperiores quidem consequuntur dolores rerum? Quam, vero, inventore
          earum corrupti quis sapiente, cum maiores
        </p>
        <button>Product Details</button>
      </div>
    </div>
  );
}

export default Section3;
