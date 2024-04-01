import { useState } from "react";
import "./Profile.css";

function Profile() {
  let [theme, setTheme] = useState({
    bgColor: "white",
    textColor: "black",
  });

  let [name, setName] = useState("Rohan Sharma");

  let [image, setImage] = useState(
    "https://i.pinimg.com/originals/e3/7e/0e/e37e0e25686c2139b281a57a5b4906f2.jpg"
  );

  const changeTheme = (event) => {
    if (event.target.checked) {
      setTheme({
        bgColor: "black",
        textColor: "white",
      });
    } else {
      setTheme({
        bgColor: "white",
        textColor: "black",
      });
    }
  };
  const changeToRohan = () => {
    setName("Rohan Sharma");
    setImage(
      "https://i.pinimg.com/originals/e3/7e/0e/e37e0e25686c2139b281a57a5b4906f2.jpg"
    );
  };
  const changeToSonal = () => {
    setName("Sonal Verma");
    setImage(
      "https://i.pinimg.com/originals/e6/78/4b/e6784b9cd722d02e014d7e60ebe25e39.jpg"
    );
  };

  return (
    <div className="profileContainer">
      <div className="imageCol">
        <img src={image} width="100%" height={430} />
      </div>
      <div
        className="contentCol"
        style={{ backgroundColor: theme.bgColor, color: theme.textColor }}
      >
        <dl>
          <dt>User Name</dt>
          <dd>{name}</dd>
          <dt>Email ID</dt>
          <dd>raj@gmail.com</dd>
          <dt>Gender</dt>
          <dd>Male</dd>
          <dt>Description</dt>
          <dd>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            eos tempora temporibus cumque similique quae labore quis eum illo
            inventore omnis ipsa eius possimus, qui facilis adipisci aut
            obcaecati veniam?
          </dd>
        </dl>
        <button
          onClick={changeToRohan}
          className="btn btn-outline-success mx-4"
        >
          Rohan Sharma
        </button>
        <button onClick={changeToSonal} className="btn btn-outline-primary">
          Sonal Verma
        </button>
        <br />
        <br />
        <input type="checkbox" className="mx-2" onChange={changeTheme} />
        Check to Switch Dark Mode
      </div>
    </div>
  );
}

export default Profile;
