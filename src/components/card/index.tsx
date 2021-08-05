import React from "react";

interface cardsProps {
  name: string;
}

const Card: React.FC<cardsProps> = ({ name }) => {
  return (
    <div>
      <p>{name}</p>
    </div>
  );
};

export default Card;
