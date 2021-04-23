import styled from "styled-components";

export const Button = styled.button`
  font-size: 20px;
  background-color: blue;
  color: yellow;
  border-radius: 8px;
  border: none;
  padding: 15px 40px;
  margin: 10px;
  cursor: pointer;
  &:hover {
    color: purple;
    background: none;
    border: 1px solid black;
  }
`;
