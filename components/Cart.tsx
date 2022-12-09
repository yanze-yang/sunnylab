import React, { useContext } from "react";
import { CartContext } from "../contexts/cart.context";

export default function Cart() {
  const { cartItems, cartCount } = useContext(CartContext);
  return (
    <div
      style={{
        position: "absolute",
        top: "20px",
        right: "100px",
        backgroundColor: "#efefef",
      }}
    >
      {cartItems.map((item) => (
        <div>
          <h1>{item.name}</h1>
          <p>{item.price}</p>
          <p>{item.quantity}</p>
        </div>
      ))}
    </div>
  );
}
