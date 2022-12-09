import React, { useContext } from "react";
import { CartContext } from "../contexts/cart.context";

export default function Cart() {
  const { cartItems } = useContext(CartContext);
  return (
    <div>
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
