import React from "react";
import styled from "styled-components";

const Page = styled.div`
  background-color: #f0f0f0;
`;

const Container = styled.div`
  max-width: 1280px;
  margin: auto;
`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  padding: 16px;
`;

export default function ShopIndex() {
  return (
    <Page>
      navbar
      <Container>
        <Card>
          <h1>Shop</h1>
          <p>Here is a list of products</p>
        </Card>
        <Card>
          <h1>Shop</h1>
          <p>Here is a list of products</p>
        </Card>{" "}
        <Card>
          <h1>Shop</h1>
          <p>Here is a list of products</p>
        </Card>
      </Container>
    </Page>
  );
}
