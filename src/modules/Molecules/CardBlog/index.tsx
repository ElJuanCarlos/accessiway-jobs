import React from "react";

import { CardContainer, Flex, Title, Description } from "./style";

const Card: React.FC<CardProps> = ({ location, title, description }) => {
  return (
    <CardContainer>
      <Flex>
        <Description>{location}</Description>
      </Flex>
      <Title>{title}</Title>

      <Description>{description}</Description>
    </CardContainer>
  );
};

export default Card;
