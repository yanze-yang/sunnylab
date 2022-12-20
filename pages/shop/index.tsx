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
  max-width: 1280px;
  margin: auto;
  padding: 2rem;
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
    <main>
      <Navbar />
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">
              All Macarons are tailored to your taste & style.
            </h1>
            <p className="lead text-muted">
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don’t simply skip over it entirely.
            </p>
            <p>
              <a href="#" className="btn btn-primary my-2">
                Main call to action
              </a>
              <a href="#" className="btn btn-secondary my-2">
                Secondary action
              </a>
            </p>
          </div>
        </div>
      </section>

      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {products.map((product) => (
              <ProductCard key={product.id} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
