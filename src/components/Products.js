import { useState, useEffect } from "react";
import { useCart } from "./CartContext";

const Products = () => {
  const [products, setProducts] = useState([]);
  const { cartItems, addToCart, removeFromCart } = useCart();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="page-width">
      <div className="products-wrapper flex center-items">
        {products.map((product) => {
          const isInCart = cartItems.some((item) => item.id === product.id);
          return (
            <div
              key={product.id}
              className="product-card flex flex-col center-items justify-between shadow rounded-20 p-16"
            >
              <div>
                <h3 className="title-1">{product.title}</h3>
              </div>
              <div>
                <p className="description-1">
                  {product.description.split(" ").slice(0, 10).join(" ") +
                    "..."}
                </p>
              </div>
              <div>
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-180 w-full"
                />
              </div>
              <div className="price-button flex justify-between center-items w-full green-1">
                <p>${product.price}</p>

                {isInCart ? (
                  <button
                    className="btn"
                    onClick={() => removeFromCart(product.id)}
                  >
                    Remove item
                  </button>
                ) : (
                  <button className="btn" onClick={() => addToCart(product)}>
                    Add to cart
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
