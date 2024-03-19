import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Header } from "./Header";
import Main from "./Main";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

ReactDOM.render(
  <div>
    <Header />
    <App />

    <Main />
    <App />
    <Main />
  </div>,
  document.getElementById("root")
);
