import React from "react";
import styled from "styled-components";

const Section = styled.section`
  background-color: #f3ccc8;
  padding: 0rem 1.5rem;
  height: 100%;
  display: flex;
  align-items: center;

  @media screen and (min-width: 768px) {
    height: 100vh;
  }
`;

const IntroWrapper = styled.div`
  display: grid;
  padding: 3rem 0rem;
  grid-template-columns: 1fr;
  gap: 3rem;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    align-items: center;
    text-align: left;
  }
`;

const Left = styled.div`
  margin: 0 -2rem;
  @media screen and (min-width: 768px) {
    margin: 0;
    margin-left: -6rem;
  }
`;

const Right = styled.div`
  .title {
    font-family: ${({ theme }) => theme.fonts.monument};
    font-size: 1.8rem;
  }

  .paragraph {
    font-size: 1rem;

    p {
      padding: 0.5rem 0;
    }
  }

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2rem;

    .title {
      font-family: ${({ theme }) => theme.fonts.monument};
      font-size: 2rem;
    }

    .paragraph {
      font-size: 1.3rem;
    }
  }
`;

export default function IntroSection() {
  return (
    <>
      <Section>
        <IntroWrapper>
          <Left>
            <img src="/intro-image.png" alt="intro" />
          </Left>
          <Right>
            <div className="title">
              Every moment is a special occasion worth celebrating.
            </div>
            <div className="paragraph">
              <p>
                Our Macarons are crafted by skilled artisans in New Zealand,
                using locally sourced ingredients whenever possible. We take
                great pride in our products, and it shows in every bite.
              </p>
              <p>
                From the first crunch of the delicate shell to the burst of
                flavour in the filling, our Macarons are a truly unique and
                unforgettable experience.
              </p>
            </div>
          </Right>
        </IntroWrapper>
      </Section>
    </>
  );
}
