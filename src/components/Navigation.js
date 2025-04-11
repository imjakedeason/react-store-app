import { NavLink } from "react-router-dom";
import { FaCartShopping, FaStore } from "react-icons/fa6";
import { useCart } from "./CartContext";

const Navigation = () => {
  const { totalItems } = useCart();

  return (
    <div className="nav-wrapper">
      <div className="page-width">
        <nav className="nav flex justify-between center-items">
          <div className="nav-left flex">
            <NavLink to="/" className="nav-left logo">
              <FaStore />
              <span>Ecomzy</span>
            </NavLink>
          </div>
          <div className="nav-right flex">
            <NavLink to="/" className="menu">
              Home
            </NavLink>
            <NavLink to="/cart" className="cart-link">
              <FaCartShopping size={24} />
              {totalItems > 0 && (
                <span className="cart-badge">{totalItems}</span>
              )}
            </NavLink>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
