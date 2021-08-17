import React from "react";
import { FooterWrapper } from "./styles";
import image from "./../../assets/image/logo.png";

function Footer(): JSX.Element {
  return (
    <FooterWrapper>
      <img src={image} alt="imagen logo" />
    </FooterWrapper>
  );
}

export default Footer;
