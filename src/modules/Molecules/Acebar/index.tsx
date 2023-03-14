import React from "react";
import Link from "next/link";
import { Wrapper, Container, Flex, Text, WhiteLink } from "./style";
import { BsArrowRightShort } from "react-icons/bs";

const AceBar: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <Flex>
          <Text>‼️ Il tuo sito è già accessibile?</Text>
          <Link href="/" legacyBehavior>
            <WhiteLink>Verificalo ora gratuitamente</WhiteLink>
          </Link>
          <BsArrowRightShort size={25} />
        </Flex>
      </Container>
    </Wrapper>
  );
};

export default AceBar;
