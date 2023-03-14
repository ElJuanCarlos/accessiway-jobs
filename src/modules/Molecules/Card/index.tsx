import Image from "next/image";
import React from "react";
import { CardContainer, Flex, Title, Description } from "./style";

const Card: React.FC<CardProps> = ({ icon, title, description }) => {
  return (
    <CardContainer>
      <Flex>
        <Image src={icon} alt="icon" width={40} />
        <Title>{title}</Title>
      </Flex>
      <Description>{description}</Description>
    </CardContainer>
  );
};

export default Card;
