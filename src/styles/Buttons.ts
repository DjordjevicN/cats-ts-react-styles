import styled, { css } from "styled-components";

interface ButtonProps {
  round?: boolean;
  primary?: boolean;
  secondary?: boolean;
}

export const Button = styled.button<ButtonProps>`
  font-size: 20px;
  background-color: gray;
  color: white;
  border-radius: ${(props) => (props.round ? "30px" : "0")};
  border: none;
  padding: 15px 41px;
  margin-top: 10px;
  cursor: pointer;
  transition: 0.3s;

  ${(props) =>
    props.primary &&
    css`
      color: white;
      background-color: green;
    `}
  ${(props) =>
    props.secondary &&
    css`
      color: red;
      background-color: black;
    `}
    &:hover {
    border-radius: 10px;
  }
`;
