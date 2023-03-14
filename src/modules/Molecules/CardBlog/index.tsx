import React from "react";
import { MdLocationPin } from "react-icons/md";
import { CardContainer, Flex, Title, Description, Text } from "./style";
import { Button } from "@/modules/Atoms";
import Link from "next/link";

const Card: React.FC<CardProps> = ({ location, title, description, link }) => {
  return (
    <CardContainer>
      <Flex>
        <Text>
          <MdLocationPin style={{ marginRight: "5px" }} />
          {location}
        </Text>
      </Flex>
      <Title>{title}</Title>

      <Description>{description}</Description>
      <Link
        href={link}
        style={{
          textDecoration: "underline",
          color: "#000",
        }}
      >
        Candidati ora
      </Link>
    </CardContainer>
  );
};

export default Card;
