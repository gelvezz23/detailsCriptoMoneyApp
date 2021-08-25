import styled from "styled-components";

export const Container = styled.section`
  width: 100%;

  button {
    background-color: transparent;
    font-size: 1em;
    margin: 0.5em;
    padding: 0.15em 0.5em;
    border: 2px solid palevioletred;
    color: palevioletred;
    :hover {
      background-color: palevioletred;
      color: white;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
