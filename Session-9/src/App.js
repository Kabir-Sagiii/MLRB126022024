import "./App.css";
import Counter from "./components/Counter/Counter";
import Profile from "./components/Profile/Profile";
import Nav from "./components/Nav/Nav";
import Products from "./components/Products/Products";
function App() {
  return (
    <div>
      <Nav />
      {/* <Profile /> */}
      <Products />
    </div>
  );
}

export default App;
