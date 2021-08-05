import React from "react";
import { CardWrapper } from "./styles";
interface cardsProps {
  name: string;
  symbol: string;
  price_usd: number;
}

const Card: React.FC<cardsProps> = ({ name, symbol, price_usd }) => {
  return (
    <>
      <CardWrapper>
        <div>
          <p>
            <span>nombre : </span>
            {name}

            <span>simbolo : </span>
            {symbol}
          </p>
        </div>
        <div>
          <p>
            <span>precio : </span>
            {price_usd}
          </p>
        </div>
      </CardWrapper>
    </>
  );
};

export default Card;
