import React from "react";
import { useNearScreen } from "./../../hooks/lazyLoading";

import { Article, CardWrapper } from "./styles";
import { Button } from "./../header/styles";

interface cardsProps {
  id: number;
  name: string;
  symbol: string;
  price_usd: number;
}

const Card: React.FC<cardsProps> = ({ id, name, symbol, price_usd }) => {
  const [show, element] = useNearScreen();

  return (
    <Article ref={element}>
      {show && (
        <CardWrapper>
          <div>
            <p>
              <span>nombre : </span> {name} <br /> <span>simbolo : </span>{" "}
              {symbol}
            </p>
          </div>
          <div>
            <p>
              <span>precio : </span>
              {price_usd}
              <br />
              <Button to={"details/" + id} primary={false}>
                Ver mas
              </Button>
            </p>
          </div>
        </CardWrapper>
      )}
    </Article>
  );
};

export default Card;
