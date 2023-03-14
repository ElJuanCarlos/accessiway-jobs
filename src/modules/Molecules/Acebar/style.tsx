import styled from "styled-components";
export const Wrapper = styled.div`
  border-radius: 0 0 20px 20px;
  height: 50px;
  display: flex;
  align-items: center;
  width: 100%;
  background-color: ${(props) => props.theme.colors.darkBlue};
  color: ${(props) => props.theme.colors.white};
  text-align: center;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

export const Text = styled.p`
  font-size: "14px";
  margin: 0px;
  text-align: center;
`;

export const WhiteLink = styled.a`
  color: ${(props) => props.theme.colors.white};
`;
