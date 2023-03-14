import styled from "styled-components";

export const Grid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  padding: 20px;
  @media (max-width: 668px) {
    grid-template-columns: 1fr;
  }
`;
export const GridItem = styled.div`
  width: 100%;
`;
