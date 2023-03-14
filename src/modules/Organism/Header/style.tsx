import styled from "styled-components";

export const Stiky = styled.div`
  position: fixed;
  top: 0;
  z-index: 999;
  width: 100%;
`;
export const Wrapper = styled.div`
  box-shadow: 10px 10px 10px #00000007;
  background-color: #fff;
  border-radius: 0 0 20px 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  padding: 0px 20px;
`;
export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;
export const Flex = styled.div`
  display: flex;
  align-items: center;
  font-family: "Atkinson Hyperlegible", sans-serif;
  justify-content: space-between;
  gap: 10px;
`;
export const Box = styled.div`
  display: flex;
  align-items: center;
`;
export const MenuContainer = styled.div`
  display: block;
  @media (max-width: 1168px) {
    display: none;
  }
`;
