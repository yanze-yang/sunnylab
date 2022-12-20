import React from "react";
import styled from "styled-components";

const Section = styled.section`
  background-color: #fff;
  padding: 0rem 1.5rem;
  height: 100%;
  @media screen and (min-width: 768px) {
    padding: 5rem 2rem;
    height: 100vh;
  }
`;

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.grey};
  margin: 0 auto;
`;

const HeroWrapper = styled.div`
  display: grid;
  padding: 3rem 2rem;
  grid-template-columns: 1fr;

  @media screen and (min-width: 768px) {
    padding: 3rem 2rem;
    height: 70vh;

    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;

    justify-items: center;
    text-align: left;

    color: #4b4b4b;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
  }
`;

const Left = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    width: 60%;
  }
`;

const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  color: #4b4b4b;

  @media screen and (min-width: 768px) {
    align-items: flex-start;
  }
`;

const Text = styled.div`
  font-size: 3rem;
  line-height: 110%;
  font-size: clamp(3rem, 1.092rem + 8.142vw, 5rem);
  text-align: center;

  @media screen and (min-width: 768px) {
    line-height: 130%;
    font-size: clamp(2.6rem, -1rem + 7.5vw, 5rem);
    text-align: left;
  }
`;

// order now button
const Button = styled.div`
  font-family: ${({ theme }) => theme.fonts.monument};
  font-size: 1.2rem;
  border-bottom: #4b4b4b 3px solid;
  margin-left: 0.5rem;
  cursor: pointer;
`;

const Bottom = styled.div`
  font-family: ${({ theme }) => theme.fonts.monument};
  font-size: clamp(2.5rem, 0.115rem + 10.178vw, 5rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 0.3rem;
  margin-top: 1rem;
  & :first-child {
    font-size: 0.7em;
  }

  & :last-child {
    text-transform: uppercase;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    margin-top: 1rem;
    flex-direction: row;
    justify-content: flex-end;
    gap: 2rem;
    align-items: baseline;

    // font size clamp 3.3rem in 768px to 8rem in 1820px
    font-size: clamp(3.3rem, -0.273rem + 7.273vw, 8rem);
  }
`;

export default function HeroSection() {
  return (
    <Section>
      <Container>
        <HeroWrapper>
          <Left>
            <img src="/hero-image.png" alt="hero" />
            <img src="/shadow.svg" alt="shodow" />
          </Left>
          <Right>
            <Text>Strawberry Banana Chocolate</Text>
            <Button>Order Now {">"}</Button>
          </Right>
        </HeroWrapper>
      </Container>
      <Bottom>
        <div>Designer</div>
        <div>Macarons</div>
      </Bottom>
    </Section>
  );
}
