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
    <div className="col">
      <div className="card shadow-sm">
        <svg
          className="bd-placeholder-img card-img-top"
          width="100%"
          height="225"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Placeholder: Thumbnail"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <title>{name}</title>
          <rect width="100%" height="100%" fill="#55595c" />
          <text x="50%" y="50%" fill="#eceeef" dy=".3em">
            {name}
          </text>
        </svg>

        <div className="card-body">
          <p className="card-text">
            ${price} + {name}
          </p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
                onClick={addItemToCartHandler}
              >
                Add to cart
              </button>
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                Edit
              </button>
            </div>
            <small className="text-muted">9 mins</small>
          </div>
        </div>
      </div>
    </div>
  );
}
