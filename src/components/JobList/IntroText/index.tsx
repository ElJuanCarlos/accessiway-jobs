import React from "react";
import { DotText } from "@/modules/Atoms/";
import { IntroContainer, Title, SubTitle, Flex } from "./style";

const IntroText: React.FC = () => {
  return (
    <Flex>
      <IntroContainer>
        <DotText variant="light" align="center">
          Jobs
        </DotText>
        <Title>
          A great workplace combines exceptional colleagues and hard problems.
        </Title>
        <SubTitle>
          Gli ultimi aggiornamenti, storie, idee e eventi dal team AccessiWay
        </SubTitle>
      </IntroContainer>
    </Flex>
  );
};

export default IntroText;
