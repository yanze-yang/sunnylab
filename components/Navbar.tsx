import React from "react";
import { CartContext } from "../contexts/cart.context";
import styled from "styled-components";
import Draw from "./cart/Draw";
import CartIcon from "./cart/CartIcon";
import Link from "next/link";
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
  margin-right: 5rem;

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

const Links = () => {
  return (
    <>
      <Link href="/admin" style={{ color: "#9c99e9" }}>
        Admin
      </Link>
      <Link href="/shop">All Macarons</Link>
      <div>contact us</div>
      <div>About</div>
    </>
  );
};

const Navbar = () => {
  const { isCartOpen } = React.useContext(CartContext);

  return (
    <>
      {isCartOpen ? <Draw /> : null}
      <StyledNavbar>
        <Logo>
          <Link href="/">SunnyLab</Link>
        </Logo>
        <Menu>
          <MunueItems>
            <Links />
          </MunueItems>
          <CartIcon />
        </Menu>
      </StyledNavbar>
      <MunueItemsMobile>
        <Links />
      </MunueItemsMobile>
    </>
  );
};
export default Navbar;
