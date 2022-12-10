import React, { useContext } from "react";
import { CartContext } from "../contexts/cart.context";

export default function Cart() {
  const { cartItems, isCartOpen, setIsCartOpen } = useContext(CartContext);
  return (
    <div
      style={{
        position: "absolute",
        top: "0",
        right: "0",
        width: "300px",
        height: "100%",
        backgroundColor: "#c7c7c7",
        zIndex: 100,
      }}
    >
      {cartItems.map((item) => (
        <div>
          <h1>{item.name}</h1>
          <p>{item.price}</p>
          <p>{item.quantity}</p>
        </div>
      ))}
      <h2 onClick={() => setIsCartOpen(!isCartOpen)}>Close</h2>
    </div>
  );
}
