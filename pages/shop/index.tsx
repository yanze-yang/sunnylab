import React from "react";
import styled from "styled-components";
import { useContext } from "react";
import { ProductsContext } from "../../contexts/products.context";
import ProductCard from "../../components/ProductCard";
import Navbar from "../../components/Navbar";

const PageTitle = styled.div`
  max-width: 1280px;
  margin-top: 4rem;
  margin: 4rem auto 0 auto;
  padding: 5rem;
  font-size: 1.4rem;
  font-weight: normal;
  font-family: ${({ theme }) => theme.fonts.monument};

  @media screen and (min-width: 768px) {
    font-size: 2rem;
  }

  @media screen and (min-width: 1280px) {
    font-size: 4rem;
  }
`;

const Container = styled.div`
  position: relative;
  max-width: 1280px;
  /* background-color: #f0f0f0; */
  display: grid;
  place-items: center;
  margin: 0 auto;
  gap: 2rem;

  @media screen and (min-width: 730px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    justify-content: center;
    align-items: center;
    gap: 2rem 0rem;
  }

  @media screen and (min-width: 1090px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    justify-content: center;
    align-items: center;
    gap: 2rem 0rem;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 2rem;
`;

export default function ShopIndex() {
  const { products } = useContext(ProductsContext);

  return (
    <>
      <Navbar />
      <PageTitle>All Macarons are tailored to your taste & style.</PageTitle>
      <Container>
        {products.map((product) => (
          <ProductCard key={product.id} />
        ))}
      </Container>
    </>
  );
}
