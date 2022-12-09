import React from "react";
import styled from "styled-components";
import { useContext } from "react";
import { ProductsContext } from "../../contexts/products.context";
import ProductCard from "../../components/ProductCard";

const Page = styled.div`
  background-color: #f0f0f0;
`;

const Container = styled.div`
  max-width: 1280px;
  margin: auto;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export default function ShopIndex() {
  const { products } = useContext(ProductsContext);

  return (
    <Page>
      navbar
      <Container>
        <CardWrapper>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </CardWrapper>
      </Container>
    </Page>
  );
}
