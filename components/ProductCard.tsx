import React, { useContext } from "react";
import { CartContext } from "../contexts/cart.context";

type ProductProps = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
};

type ProductCardProps = {
  product: ProductProps;
};

export default function ProductCard({ product }: ProductCardProps) {
  const { name, imageUrl, price } = product;
  const { addItemToCart } = useContext(CartContext);
  // pass product as an argument with id
  const addItemToCartHandler = () => addItemToCart(product);

  return (
    <div>
      <h1>{name}</h1>
      <img src={imageUrl} alt={name} />
      <p>{price}</p>
      <button onClick={addItemToCartHandler}>add to cart</button>
    </div>
  );
}
