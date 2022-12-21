import React from "react";
import styled from "styled-components";
import { BiPlus, BiMinus } from "react-icons/bi";

const CardWrapper = styled.div`
  border: 2px #000000 solid;
  max-width: 20rem;
  border-radius: 0.3rem;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;

const Image = styled.div`
  width: 100%;
  height: 100%;
  object-fit: cover;
  padding: 2rem;
  border-bottom: 2px #000 solid;
`;

const Content = styled.div`
  padding: 2rem 2rem 1.2rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.5rem;
  flex: 1 0 0;
`;

const ProductName = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
`;

const ProductDescription = styled.div`
  font-size: 1rem;
  font-weight: 400;
`;

const ProductAddToCart = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  font-weight: 400;
  width: 100%;
  margin-top: 0.8rem;
`;

const Price = styled.div`
  font-size: 1.5rem;

  font-family: ${({ theme }) => theme.fonts.monument};

  span {
    font-size: 0.8rem;
    // the span move up a little bit
    position: relative;
    top: -0.2rem;
    margin-right: 0.2rem;
  }
`;

const AddToCartButtonGroup = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.2rem 0.5rem;
  border: 2px #000 solid;
  border-radius: 0.3rem;
  font-size: 1.1rem;
  font-weight: 600;
  width: 7rem;
  cursor: pointer;

  // select the second div
  input {
    font-size: 1.3rem;
    cursor: auto;
    width: 2rem;
    text-align: center;
  }
`;

export default function Card() {
  return (
    <>
      <CardWrapper>
        <CardGrid>
          <Image>
            <img src="/hero-image.png" alt="" />
          </Image>
          <Content>
            <ProductName>Strawberry Banana Chocolate</ProductName>
            <ProductDescription>
              Filled with half strawberry cream and jam, half banana cream and
              chocolate Ganache.
            </ProductDescription>
            <ProductAddToCart>
              <Price>
                <span>$</span>4.5
              </Price>
              <AddToCartButtonGroup>
                <BiMinus />
                <input defaultValue={2} />
                <BiPlus />
              </AddToCartButtonGroup>
            </ProductAddToCart>
          </Content>
        </CardGrid>
      </CardWrapper>
    </>
  );
}
