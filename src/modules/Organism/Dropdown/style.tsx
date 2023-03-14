import styled from "styled-components";

export const DropdownContainer = styled.div`
  box-shadow: 0px 0px 20px #00000010;
  border-radius: 16px;
  background: #fff;
  position: absolute;
  width: max-content;
  margin-top: 45px;
`;

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 0px 0px 30px 0px;
`;

export const Li = styled.li`
  font-size: 14px;
`;

export const Flex = styled.div`
  display: flex;
  align-items: start;
`;

export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 10px 30px;
  &:hover {
    background-color: #0d6bf810;
    border-right: 3px solid #0d6bf8;
  }
`;

export const Title = styled.p`
  font-size: 15px;
  margin: 30px 0px 20px 30px;
  text-align: left;
`;
