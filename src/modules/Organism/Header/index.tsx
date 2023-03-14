import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/images/logo_accessiway.svg";
import { Button } from "@/modules/Atoms";
import { Acebar } from "@/modules/Molecules";
import { Navbar } from "@/modules/Organism";
import { Modal } from "@/modules/Organism/";
import { Stiky, Wrapper, Container, Flex, Box, MenuContainer } from "./style";

const Header: React.FC = () => {
  return (
    <Stiky>
      <Acebar />
      <Wrapper>
        <Container>
          <Flex>
            <Box>
              <Link href="/">
                <Image src={Logo} alt="Accessiway Logo" width={180} />
              </Link>
              <MenuContainer>
                <Navbar />
              </MenuContainer>
            </Box>
            <Flex>
              <Modal />
              <Button buttonType="outlined" size="medium">
                Accedi
              </Button>
            </Flex>
          </Flex>
        </Container>
      </Wrapper>
    </Stiky>
  );
};

export default Header;
