import styled from "styled-components";
export const StyledModal = styled.div`
  box-shadow: 0px 0px 20px #00000030;
  border-radius: 16px;
  padding: 30px;
  width: 85%;
  max-width: 600px;
  position: fixed;
  top: 0;
  background-color: #fff;
  z-index: 9999999;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  background-color: #fff;
  z-index: 9999999;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: block;
`;
export const Overlay = styled.div`
  background-color: #00000040;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
  height: 100vh;
`;
