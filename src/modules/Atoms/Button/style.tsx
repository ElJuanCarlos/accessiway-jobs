import styled from "styled-components";

export const StandardButton = styled.button<ButtonProps>`
  background-color: ${(props) =>
    props.buttonType === "primary" ? "#185cff" : "transparent"};
  color: ${(props) => (props.buttonType === "primary" ? "white" : "#185cff")};
  font-size: 1em;
  font-family: "Atkinson Hyperlegible", sans-serif;
  font-weight: 400;
  margin: 1em;
  padding: 8px 16px;
  border: 1px solid ${(props) => props.theme.colors.primaryBlue};
  color: ${(props) => (props.buttonType === "primary" ? "white" : "#185cff")};
  border-radius: 10px;
  margin: 0px;
  width: max-content;
  cursor: pointer;
`;

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  position: absolute;
  right: 0;
  top: 0;
  padding: 10px;
  cursor: pointer;
`;
