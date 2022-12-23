/* eslint-disable @next/next/no-img-element */
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { BiPlus, BiMinus } from "react-icons/bi";
import { CartContext } from "../contexts/cart.context";

type CardProps = {
  product: {
    id: string | number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
  };
};

const CardWrapper = styled.div`
  border: 2px #000000 solid;
  max-width: 20rem;
  border-radius: 0.3rem;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  object-fit: cover;
  padding: 1.2rem 2rem;
  border-bottom: 2px #000 solid;
`;

const Content = styled.div`
  padding: 1.2rem 2rem;
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
    top: -0.3rem;
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

export default function Card({ product }: CardProps) {
  const { name, description, price, imageUrl } = product;
  const {
    addItemToCart,
    removeItemFromCart,
    quantityInCart,
    updateItemInCart,
  } = useContext(CartContext);

  const quantity = quantityInCart(product);

  const addItemToCartHandler = () => {
    addItemToCart(product);
  };

  const removeItemFromCartHandler = () => {
    if (quantity === 0) return;
    removeItemFromCart(product);
  };

  const updateItemInCartHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "" || parseInt(value) === 0) {
      removeItemFromCartHandler();
      return;
    }

    updateItemInCart(product, parseInt(value));
  };

  const x = 0;

  return (
    <>
      <CardWrapper>
        <CardGrid>
          <ImageWrapper>
            <img src={imageUrl} alt="marcaron" />
          </ImageWrapper>
          <Content>
            <ProductName>{name}</ProductName>
            <ProductDescription>{description}</ProductDescription>
            <ProductAddToCart>
              <Price>
                <span>$</span>
                {price}
              </Price>
              <AddToCartButtonGroup>
                <BiMinus
                  onClick={() => {
                    removeItemFromCartHandler();
                  }}
                />
                <input
                  value={quantity}
                  onChange={(e) => updateItemInCartHandler(e)}
                />
                <BiPlus
                  onClick={() => {
                    addItemToCartHandler();
                  }}
                />
              </AddToCartButtonGroup>
            </ProductAddToCart>
          </Content>
        </CardGrid>
      </CardWrapper>
    </>
  );
}
