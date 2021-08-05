import React from "react";
import { CardWrapper } from "./styles";
interface cardsProps {
  name: string;
  symbol: string;
}

const Card: React.FC<cardsProps> = ({ name, symbol }) => {
  return (
    <>
      <CardWrapper>
        <p>{name}</p>
        <p>{symbol}</p>
      </CardWrapper>
    </>
  );
};

export default Card;
