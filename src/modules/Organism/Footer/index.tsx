import React from "react";
import LogoWhite from "@/assets/svg/Logo_Pittogramma_AccessiWay_white.svg";
import Image from "next/image";
import { Wrapper, Container, Flex, BottomBar, WhiteText } from "./style";

const Footer: React.FC = () => {
  return (
    <>
      <Wrapper>
        <Container>
          <Flex>
            <Image src={LogoWhite} width={90} height={90} alt="logo" />
          </Flex>
        </Container>
      </Wrapper>
      <BottomBar>
        <WhiteText>
          AccessiWay S.r.l. - P.IVA: 12419990010 - PEC: accessiway@pec.net-
          Headquarter: Via Pietro Micca n. 20, Torino - 10122 (TO)
        </WhiteText>
      </BottomBar>
    </>
  );
};

export default Footer;
