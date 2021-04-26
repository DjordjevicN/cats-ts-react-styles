import styled, { css } from "styled-components";
import { myTheme } from "../styles/myTheme";
interface HeadingProps {
  isActive?: boolean;
  center?: boolean;
}
interface ParagraphProps {
  primary?: boolean;
}

export const H1 = styled.h1<HeadingProps>`
  font-family: "Inter", sans-serif;
  font-size: 36px;
  padding-right: 10px;
  text-align: ${(props) => (props.center ? "center" : "left")};
  color: ${(props) =>
    props.isActive ? myTheme.colors.secondary : myTheme.colors.main};
`;
export const H2 = styled(H1)`
  font-size: 24px;
`;
export const H3 = styled(H1)`
  font-size: 18px;
`;
export const H4 = styled(H1)`
  font-size: 15px;
`;
export const H5 = styled(H1)`
  font-size: 13px;
`;
export const H6 = styled(H1)`
  font-size: 11px;
`;

export const Paragraph = styled.p<ParagraphProps>`
  font-family: "Inter", sans-serif;
  color: black;
  ${(props) =>
    props.primary &&
    css`
      color: ${myTheme.colors.main};
    `}
`;
