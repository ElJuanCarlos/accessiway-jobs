import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
`;
export const Ul = styled.ul`
  list-style: none;
  display: flex;
  gap: 5px;
  margin: 0px;
  font-family: "Atkinson Hyperlegible", sans-serif;
  font-weight: 400;
`;
export const Li = styled.li`
  font-size: 12px;
  text-transform: uppercase;
  font-family: "Atkinson Hyperlegible", sans-serif;
  font-weight: 400;
`;
export const Flex = styled.div`
  display: flex;
  gap: 3px;
  &:hover {
    color: ${(props) => props.theme.colors.primaryBlue};
    text-decoration: underline;
  }
`;
export const MenuFlex = styled.button`
  background: none;
  border: none;
  align-items: center;
  cursor: pointer;
`;
export const DropdownWrapper = styled.div<DropdownWrapperProps>`
  transition: display 0.3s;
  display: ${(props) => (props.visible === "visible" ? "block" : "none")};
`;
export const IconWrapper = styled.div<DropdownWrapperProps>`
  transform: ${(props) =>
    props.visible === "visible" ? "rotateZ(-1);" : "scaleX(1)"};
`;
