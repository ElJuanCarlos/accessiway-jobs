import styled from "styled-components";

export const DotTextContainer = styled.div<DotProps>`
  display: flex;
  gap: 7px;
  align-items: center;
  justify-content: ${(props) => (props.align === "left" ? "left" : "center")};
`;

export const Dot = styled.div<DotProps>`
  width: 7px;
  height: 7px;
  background-color: ${(props) =>
    props.variant === "light"
      ? props.theme.colors.secondaryGray
      : props.theme.colors.white};
  border-radius: 100%;
`;

export const Text = styled.h1<DotProps>`
  font-size: 11px;
  font-family: "Atkinson Hyperlegible", sans-serif;
  font-weight: 400;
  letter-spacing: 3px;
  margin: 0;
  text-transform: uppercase;
  color: ${(props) =>
    props.variant === "light"
      ? props.theme.colors.secondaryGray
      : props.theme.colors.white};
`;
