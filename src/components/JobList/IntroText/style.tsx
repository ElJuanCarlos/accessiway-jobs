import styled from "styled-components";

export const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-family: 'Atkinson Hyperlegible', sans-serif;
  font-size: 46px;
  line-height: 50px;
  font-weight: 400;
  max-width:900px;
  margin: 20px 0px;
  text-align: center;
  color ${(props) => props.theme.colors.primaryGray};
   @media (max-width: 968px) {
    font-size:46px;
  }
`;

export const SubTitle = styled.h3`
  font-size: 18px;
  font-family: 'Atkinson Hyperlegible', sans-serif;
  font-weight: 400;
  max-width: 900px;
  text-align: center;
  color ${(props) => props.theme.colors.primaryGray};
  margin: 5px 0px;
    @media (max-width: 968px) {
    font-size:18px;
  }
`;
export const ButtonWrapper = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
  gap: 15px;
  @media (max-width: 968px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ImagesContainer = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 15px;
`;
export const ImagesWrapper = styled.div`
  width: 150px;
  height: 150px;
  position: relative;
  @media (max-width: 968px) {
    width: 100px;
    height: 100px;
  }
`;

export const Flex = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 200px 0px 0px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 968px) {
    margin-top: 150px;
    flex-direction: column;
    width: 100%;
    padding: 80px 0px 0px 0px;
    align-items: center;
  }
`;
