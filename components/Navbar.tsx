import React, { useRef } from "react";
import { CartContext } from "../contexts/cart.context";
import styled from "styled-components";
import Draw from "./Draw";
const StyledNavbar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.3rem 2rem;
  background-color: #fff;
  z-index: 10;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: normal;
  font-family: ${({ theme }) => theme.fonts.monument};
`;

// menu items
const MunueItems = styled.div`
  display: flex;
  gap: 2rem;
  margin-right: 4.2rem;

  & > div {
    :hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const CartIcon = styled.div`
  position: fixed;
  right: 1rem;
  z-index: 20;

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

  const DrawRef = useRef();
  return (
    <>
      {isCartOpen ? <Draw /> : null}
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
