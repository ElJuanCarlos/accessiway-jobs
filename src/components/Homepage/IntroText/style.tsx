import styled from "styled-components";

export const ImageFillDesk = styled.div`
  width: 300px;
  height: 300px;
  position: relative;
  @media (max-width: 968px) {
    display: none;
  }
`;
export const ImageFillMobile = styled.div`
  width: 200px;
  height: 200px;
  position: relative;
  @media (min-width: 968px) {
    display: none;
  }
`;
export const MobileImageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 50px;
  width: 100%;
  margin-bottom: 40px;
  @media (min-width: 968px) {
    display: none;
  }
`;

export const IntroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0px 50px;
  @media (max-width: 968px) {
    padding: 00px;
  }
`;

export const Title = styled.h1`
  font-family: 'Atkinson Hyperlegible', sans-serif;
  font-size: 56px;
  line-height: 56px;
  font-weight: 400;
  max-width:500px;
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
  max-width: 580px;
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
  margin-top: 200px;
  padding: 0px 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 968px) {
    margin-top: 150px;
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
`;
