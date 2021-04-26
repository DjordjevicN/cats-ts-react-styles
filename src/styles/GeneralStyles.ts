import styled, { css } from "styled-components";

interface FlexProps {
  row?: boolean;
  column?: boolean;
  spaceBetween?: boolean;
  spaceAround?: boolean;
}

export const Wrapper = styled.section`
  line-height: 20px;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  filter: drop-shadow(2px 2px 4px rgb(168, 168, 168));
`;
export const TextBoxWrapper = styled.div`
  padding: 20px;
`;

export const FlexContainer = styled.div<FlexProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 5px;

  ${(props) =>
    props.row &&
    css`
      flex-direction: row;
    `}
  ${(props) =>
    props.column &&
    css`
      flex-direction: column;
    `}
${(props) =>
    props.spaceBetween &&
    css`
      justify-content: space-between;
    `}
${(props) =>
    props.spaceAround &&
    css`
      justify-content: space-around;
    `}
`;

export const Image = styled.img`
  width: 50%;
`;
