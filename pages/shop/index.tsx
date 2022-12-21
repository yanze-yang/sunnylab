import React from "react";
import styled from "styled-components";
import { useContext } from "react";
import { ProductsContext } from "../../contexts/products.context";
import ProductCard from "../../components/ProductCard";
import Navbar from "../../components/Navbar";

const Page = styled.div`
  background-color: #f0f0f0;
`;

const Container = styled.div`
  position: relative;
  top: 6rem;
  padding: 2rem;
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
      <Container>
        {products.map((product) => (
          <ProductCard key={product.id} />
        ))}
      </Container>
    </>
  );
}
