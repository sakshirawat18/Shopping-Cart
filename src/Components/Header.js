import { Link } from "react-router-dom";
import { CartState } from "../Context";
import "./style.css";

const Header = () => {
  const { cart } = CartState();

  return (
    <div>
      <span className="header">React Context API</span>
      <ul className="nav">
        <li className>
          <Link to="/">Home Page</Link>
        </li>
        <li className>
          <Link to="/cart">Cart ({cart.length})</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;