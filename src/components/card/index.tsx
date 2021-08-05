import React from "react";
import { Link } from "react-router-dom";
import { CardWrapper } from "./styles";
import { Button } from "./../header/styles";
interface cardsProps {
  id: number;
  name: string;
  symbol: string;
  price_usd: number;
}

const Card: React.FC<cardsProps> = ({ id, name, symbol, price_usd }) => {
  return (
    <>
      <CardWrapper>
        <div>
          <p>
            <span>nombre : </span> {name} | <span>simbolo : </span> {symbol}
          </p>
        </div>
        <div>
          <p>
            <span>precio : </span>
            {price_usd}

            <Button to="/"> Ver mas</Button>
          </p>
        </div>
      </CardWrapper>
    </>
  );
};

export default Card;
