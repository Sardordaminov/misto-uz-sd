import React from "react";
import { useCart } from "./CartContext";

const Product = ({ el }) => {
  const { addToCart } = useCart();

  return (
    <>
      <button onClick={() => addToCart(el)}>ADD TO CART</button>
    </>
  );
};

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => removeFromCart(item.id)}>
              Remove from Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { Product, Cart };
