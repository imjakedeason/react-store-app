import { NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { FaTrashCan } from "react-icons/fa6";

const Cart = () => {
  const { cartItems, removeFromCart, totalItems, totalPrice } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="empty-cart page-width">
        <h2 className="empty-txt">Košarica je prazna!</h2>
        <NavLink to="/" className="cart-bttn">
          Shop now
        </NavLink>
      </div>
    );
  }

  return (
    <div className="cart-container flex flex-row page-width  justify-center">
      <div>
        {cartItems.map((item) => (
          <div key={item.id} className="cart-products flex flex-row">
            <img src={item.image} alt={item.title} className="w-30" />
            <div className="cart-info">
              <h3 className="title-2">{item.title}</h3>
              <p className="description-2">
                {(item.description || "").split(" ").slice(0, 16).join(" ") +
                  "..."}
              </p>
              <div className="price-button flex justify-between w-full green-1">
                <p>${item.price.toFixed(2)}</p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="cart-product-remove"
                >
                  <FaTrashCan />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-summary flex flex-col justify-between">
        <div className="flex flex-col">
          <h2 className="txt-upper green-1 font-18">Your Cart</h2>
          <h1 className="txt-upper green-1 font-50">Summary</h1>
          <p className="font-bold">Total items: {totalItems}</p>
        </div>

        <div className="flex flex-col mt-24">
          <p className="font-bold">Total price: ${totalPrice.toFixed(2)}</p>
          <button className="cart-bttn">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
