import React from "react";
import Image from "next/image";
import { DotText, Button } from "@/modules/Atoms";
import { Google, Rating, G2Rating, ImageA, ImageB } from "@/assets/images";
import {
  Flex,
  MobileImageWrapper,
  ImagesWrapper,
  ImageFillDesk,
  ImageFillMobile,
  ImagesContainer,
  IntroContainer,
  Title,
  SubTitle,
  ButtonWrapper,
} from "./style";

const HomepageIntro: React.FC = () => {
  return (
    <Flex>
      <MobileImageWrapper>
        <ImageFillMobile>
          <Image
            src={ImageA}
            alt="image a"
            fill={true}
            style={{ objectFit: "contain" }}
          />
        </ImageFillMobile>
        <ImageFillMobile>
          <Image
            src={ImageB}
            alt="image b"
            fill={true}
            style={{ objectFit: "contain" }}
          />
        </ImageFillMobile>
      </MobileImageWrapper>
      <ImageFillDesk>
        <Image
          src={ImageA}
          alt="image a"
          fill={true}
          style={{ objectFit: "contain" }}
        />
      </ImageFillDesk>
      <IntroContainer>
        <DotText variant="light">BENVENUTO SU ACCESSIWAY</DotText>
        <Title>La tua soluzione di accessibilità web</Title>
        <SubTitle>
          Offriamo percorsi dedicati e strumenti all’avanguardia per rendere
          accessibili i tuoi siti web, web app e applicativi mobile.
        </SubTitle>
        <ButtonWrapper>
          <Button buttonType="primary">Scopri le nostre soluzioni</Button>
          <Button buttonType="outlined">Prenota una consulenza gratuita</Button>
        </ButtonWrapper>
        <ImagesContainer>
          <ImagesWrapper>
            <Image
              src={Google}
              alt="google"
              fill
              style={{ objectFit: "contain" }}
            />
          </ImagesWrapper>
          <ImagesWrapper>
            <Image
              src={Rating}
              alt="rating"
              fill
              style={{ objectFit: "contain" }}
            />
          </ImagesWrapper>
          <ImagesWrapper>
            <Image
              src={G2Rating}
              alt="g2rating"
              fill
              style={{ objectFit: "contain" }}
            />
          </ImagesWrapper>
        </ImagesContainer>
      </IntroContainer>
      <ImageFillDesk>
        <Image
          src={ImageB}
          alt="image b"
          fill={true}
          style={{ objectFit: "contain" }}
        />
      </ImageFillDesk>
    </Flex>
  );
};

export default HomepageIntro;
