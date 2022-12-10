import React from "react";
import styled from "styled-components";

const Section = styled.section`
  background-color: #fff;
  padding: 0rem 2rem;
  height: 100%;
`;

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.grey};
  margin: 0 auto;
`;

const HeroWrapper = styled.div`
  padding: 3rem 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  align-items: center;
  justify-items: center;
  text-align: left;

  color: #4b4b4b;
  text-transform: uppercase;
  letter-spacing: 0.1rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
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
  align-items: flex-start;
  flex-direction: column;
  gap: 2rem;
  color: #4b4b4b;
`;

const Text = styled.div`
  line-height: 130%;
  font-size: clamp(2.6rem, -1rem + 7.5vw, 5rem);
  @media screen and (max-width: 768px) {
    font-size: 5rem;
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
  display: flex;
  justify-content: flex-end;
  align-items: baseline;
  gap: 2rem;
  margin-top: 1rem;
  font-size: 8rem; // 1820 px
  font-size: 3.3rem; // 768px
  // font size clamp 3.3rem in 768px to 8rem in 1820px
  font-size: clamp(3.3rem, -0.131rem + 7.148vw, 8rem);
  font-family: ${({ theme }) => theme.fonts.monument};

  & :first-child {
    font-size: 0.7em;
  }

  & :last-child {
    text-transform: uppercase;
  }

  @media screen and (max-width: 768px) {
    font-size: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    gap: 0.3rem;
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
