import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: solid 2px white;
  width: 100%;

  div {
    padding: 5px;
    width: 50%;
  }
  p {
    text-align: right;
    font-weight: lighter;
  }
  p span {
    font-weight: bold;
    font-size: 2rem;
  }
`;
