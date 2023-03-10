import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { BasketContext } from "../../store/BasketContext";
import BusketButton from "./BasketButton";

const Header = ({ openModal }) => {
  const { items } = useContext(BasketContext);
  const [animationClass, setAnimationClass] = useState("");

  const calculateTotalAmount = () => {
    const sum = items.reduce((s, item) => {
      return s + item.amount;
    }, 0);
   
    return sum;
  };

  useEffect(() => {
    setAnimationClass("bump");

    const id = setTimeout(() => {
      setAnimationClass("");
    }, 300);

    return () => {
      clearTimeout(id);
    };
  }, [items]);

  return (
    <Container>
      <Logo>ReactMeals</Logo>
      <BusketButton
        openModal={openModal}
        className={animationClass}
        count={calculateTotalAmount()}
      />
    </Container>
  );
};

export default Header;

const Container = styled.header`
  position: fixed;
  z-index: 1;
  top: 0;
  background-color: #8a2b06;
  width: 100%;
  height: 101px;
  display: flex;
  justify-content: space-between;
  padding-left: 120px;
  padding-right: 120px;
  align-items: center;
`;

const Logo = styled.p`
  font-weight: 600;
  font-size: 38px;
  line-height: 57px;
  color: #ffff;
  margin: 0;
`;
