import React from "react";
import { CartContext } from "../contexts/cart.context";
import Cart from "./Cart";
import styled from "styled-components";
const StyledNavbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
const StyledLogo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
`;
const StyledCart = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const StyledCartCount = styled.div`
  margin-left: 0.5rem;
  font-size: 1.2rem;
  font-weight: 700;
`;
const StyledCartIcon = styled.div`
  font-size: 1.5rem;
`;
const Navbar = () => {
  const { isCartOpen, setIsCartOpen, cartCount } =
    React.useContext(CartContext);
  return (
    <StyledNavbar>
      <StyledLogo>Logo</StyledLogo>
      <StyledCart onClick={() => setIsCartOpen(!isCartOpen)}>
        <StyledCartIcon>
          <i
            className="fas fa-shopping-cart"
            onClick={() => setIsCartOpen(!isCartOpen)}
          >
            🛒
          </i>
        </StyledCartIcon>
        <StyledCartCount>{cartCount}</StyledCartCount>
        {isCartOpen ? <Cart /> : null}
      </StyledCart>
    </StyledNavbar>
  );
};
export default Navbar;

// export default function Navbar() {
//   const { isCartOpen, setIsCartOpen } = React.useContext(CartContext);
//   return (
//     <div>
//       <div>
//         {isCartOpen ? <Cart /> : null}
//         <button onClick={() => setIsCartOpen(!isCartOpen)}>close</button>
//       </div>
//     </div>
//   );
// }
