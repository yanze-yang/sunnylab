import React from "react";

type ProductCardProps = {
  product: {
    name: string;
    imageUrl: string;
    price: number;
  };
};

export default function ProductCard({
  product: { name, imageUrl, price },
}: ProductCardProps) {
  return (
    <div>
      <h1>{name}</h1>
      <img src={imageUrl} alt={name} />
      <p>{price}</p>
      <button>add to cart</button>
    </div>
  );
}
