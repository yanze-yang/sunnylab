import React from "react";
import { CartContext } from "../contexts/cart.context";
import Cart from "./Cart";

export default function Navbar() {
  const { isCartOpen, setIsCartOpen } = React.useContext(CartContext);
  return (
    <div>
      <div>
        {isCartOpen ? <Cart /> : null}
        <button onClick={() => setIsCartOpen(!isCartOpen)}>close</button>
      </div>
    </div>
  );
}
