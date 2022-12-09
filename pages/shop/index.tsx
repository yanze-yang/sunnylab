import React from "react";
import styled from "styled-components";
import SHOP_DATA from "../shop-data.json";

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
        <CardWrapper>
          {SHOP_DATA.map(({ id, name, imageUrl, price }) => (
            <Card key={id}>
              <h1>{name}</h1>
              <img src={imageUrl} alt={name} />
              <p>{price}</p>
            </Card>
          ))}
        </CardWrapper>
      </Container>
    </Page>
  );
}
