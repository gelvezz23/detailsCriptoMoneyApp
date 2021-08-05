import React from "react";
import { Button, HeaderWrapper } from "./styles";
function Header() {
  return (
    <HeaderWrapper>
      <ul>
        <li>
          <Button to="/" primary>
            Inicio
          </Button>

          <Button to="/">Consultar btc</Button>
        </li>
      </ul>
    </HeaderWrapper>
  );
}

export default Header;
