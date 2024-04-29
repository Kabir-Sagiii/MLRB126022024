import "./App.css";
import Counter from "./components/Counter/Counter";
import Profile from "./components/Profile/Profile";
import Nav from "./components/Nav/Nav";
import Products from "./components/Products/Products";
import Users from "./components/Users/Users";
import Home from "./components/home/Home";
import Signin from "./components/signin/Signin";
import SignUp from "./components/signup/SignUp";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/profile" element={<Profile />} />
        <Route path="/users" element={<Users />} />
        <Route path="/products" element={<Products />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </div>
  );
}

export default App;
