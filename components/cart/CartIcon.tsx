import React from "react";
import styled from "styled-components";
import { CartContext } from "../../contexts/cart.context";

const Wrapper = styled.div`
  position: fixed;
  right: 1rem;
  z-index: 20;

  font-size: 1.2rem;
  display: flex;
  gap: 0.5rem;

  background-color: #dfdfdf;
  padding: 0.5rem;
  border-radius: 1rem;

  :hover {
    background-color: #b1b1b1;
  }
`;

export default function CartIcon() {
  const { isCartOpen, setIsCartOpen, cartCount } =
    React.useContext(CartContext);
  return (
    <Wrapper onClick={() => setIsCartOpen(!isCartOpen)}>
      <i>🛒</i>
      <span>{cartCount}</span>
    </Wrapper>
  );
}
