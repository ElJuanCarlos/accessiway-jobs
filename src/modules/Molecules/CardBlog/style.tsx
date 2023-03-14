import styled from "styled-components";

export const CardContainer = styled.div`
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  border-radius: 16px;
  border: 1px solid #ddd;
  padding: 30px;
`;
export const Title = styled.div`
margin-top:20px;
  font-size: 22px;
  font-family:
    font-family: 'Atkinson Hyperlegible', sans-serif;
  font-weight: 500;
`;
export const Description = styled.div`
  font-size: 16px;
  margin-top: 15px;
  margin-bottom: 15px;
  color: #0d0d0d90;
  display: flex;
  align-items: center;
  font-family: "Atkinson Hyperlegible", sans-serif;
  font-weight: 500;
`;
export const Text = styled.div`
  font-size: 16px;
  display: flex;
  align-items: center;
  font-family: "Atkinson Hyperlegible", sans-serif;
  font-weight: 500;
`;
export const Flex = styled.div`
  display: flex;
  align-items: left;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  position: relative;
  border-radius: 16px;
`;
