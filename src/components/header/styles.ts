import styled from "styled-components";
import { Link } from "react-router-dom";
interface Props {
  primary?: boolean;
}
export const Button = styled(Link)`
  /* Adapt the colors based on primary prop */
  background: ${(props: Props) =>
    props.primary ? "palevioletred" : "transparent"};
  color: ${(props: Props) => (props.primary ? "white" : "palevioletred")};

  font-size: 1em;
  margin: 0.5em;
  padding: 0.15em 0.5em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  text-decoration: none;
  :hover {
    background: ${(props: Props) =>
      props.primary ? "palevioletred" : "palevioletred"};
    color: ${(props: Props) => (props.primary ? "white" : "white")};
  }
`;

export const HeaderWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #282c34;
  ul {
    list-style: none;
  }
`;
