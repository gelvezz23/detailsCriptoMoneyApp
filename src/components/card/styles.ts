import styled from "styled-components";
import { fadeIn } from "./../../styles/animation";

export const CardWrapper = styled.div`
  ${fadeIn()};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  div {
    padding: 5px;
    margin: 5px;
    width: auto;
  }
  p {
    text-align: right;
    font-weight: lighter;
  }
  p span {
    font-weight: bold;
    font-size: 1.5rem;
  }
`;

export const Article = styled.article`
  min-height: auto;
`;
