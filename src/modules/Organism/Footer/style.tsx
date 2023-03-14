import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 70px;
  display: flex;
  width: 100%;
  box-shadow: -10px -10px 10px #00000007;
  background-color: #0d6bf8;
  color: ${(props) => props.theme.colors.white};
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Flex = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  align-items: center;
  gap: 25px;
  padding: 10px;
  @media (max-width: 1168px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const Title = styled.h2`
  font-size: 30px;
  margin: 0px;
  font-family: "Atkinson Hyperlegible", sans-serif;
  font-weight: 500;
`;

export const BottomBar = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  height: 80px;
  padding-right: 50px;
  padding-left: 50px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  background-color: #1a202c;
`;

export const WhiteText = styled.p`
  color: #fff;
  @media (max-width: 1168px) {
    font-size: 12px;
    text-align: center;
    line-height: 18px;
  }
`;
