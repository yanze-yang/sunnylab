import React from "react";
import { CartContext } from "../contexts/cart.context";
import Cart from "./Cart";
import styled from "styled-components";
const StyledNavbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.3rem 2rem;
  background-color: #fff;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: normal;
  font-family: ${({ theme }) => theme.fonts.monument};
`;

const CartIcon = styled.div`
  font-size: 1.2rem;
  display: flex;
  gap: 0.5rem;

  background-color: #efefef;
  padding: 0.5rem;
  border-radius: 1rem;

  :hover {
    background-color: #dfdfdf;
  }
`;

// menu items
const MunueItems = styled.div`
  display: flex;
  gap: 2rem;

  & > div {
    :hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const MunueItemsMobile = styled.div`
  display: flex;
  gap: 1.4rem;
  flex-direction: row;
  justify-content: center;
  font-size: clamp(0.8rem, 1.5vw, 1rem);
  font-family: ${({ theme }) => theme.fonts.monument};
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  margin-bottom: 1rem;

  & > div {
    :hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-transform: uppercase;
  gap: 2rem;
  font-size: 0.9rem;
  font-family: ${({ theme }) => theme.fonts.monument};
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
`;

const Navbar = () => {
  const { isCartOpen, setIsCartOpen, cartCount } =
    React.useContext(CartContext);
  return (
    <>
      <StyledNavbar>
        <Logo>SunnyLab</Logo>
        <Menu>
          <MunueItems>
            <div>All Macarons</div>
            <div>contact us</div>
            <div>About</div>
          </MunueItems>
          <CartIcon onClick={() => setIsCartOpen(!isCartOpen)}>
            <i>🛒</i>
            <span>{cartCount}</span>
          </CartIcon>
        </Menu>
        {isCartOpen ? <Cart /> : null}
      </StyledNavbar>
      <MunueItemsMobile>
        <div>All Macarons</div>
        <div>contact us</div>
        <div>About</div>
      </MunueItemsMobile>
    </>
  );
};
export default Navbar;
