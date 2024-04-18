// IntroductionPage.tsx
import React, { useEffect } from "react";
import styled from "styled-components";
import { ArtworkCard } from "../components/ArtworkCard";
import { IMAGE_INFO } from "../images/exhibits_info";
import ScrollToTop from "../components/IntroPage/ScrollToTop";
import { useLocation } from "react-router-dom";

// Styled components
const Container = styled.div`
  width: 97%;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  margin-right: 2rem;
  border: 1px solid #000;
`;

const ArtworkContainer = styled.div`
  max-width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 50px;
  row-gap: 50px;
  border: 1px solid #000;
`;

const SubtitleContainer = styled.div`
  width: 12vw;
  height: 7vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 2rem;
  img {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 0.7rem;
  }
`;

const Subtitle = styled.h3<{ id: string }>`
  id: ${(props) => props.id};
  font-size: 1.5rem;
`;

type ArtworkType = "Photography" | "Drawings" | "Calligraphy" | "Interactive";
const ArtWorkCards: React.FC<ArtworkType> = (type: ArtworkType) => {
  return (
    <ArtworkContainer>
      {IMAGE_INFO.map((image_classes, _) => {
        return image_classes["type"] === type
          ? image_classes.images.map((image, index_image) => {
              return (
                <ArtworkCard
                  image={image["image"]}
                  index={index_image}
                  type={image_classes["type"]}
                  introduction={image["introduction"]}
                />
              );
            })
          : null;
      })}
    </ArtworkContainer>
  );
};

interface state {
  title: string | undefined;
}
// Component
const IntroductionPage: React.FC = () => {
  const { state } = useLocation();
  const { title } = (state as state) || {};

  useEffect(() => {
    console.log(title);
    const element = document.getElementById("ArtworkContainer_" + title);
    if (element) {
      element.scrollIntoView();
      const nav_element = document.getElementsByTagName("nav")[0];
      window.scrollBy(0, -nav_element.clientHeight);
    }
    console.log(element);
  }, [title]);

  return (
    <Container>
      <ScrollToTop />
      <SubtitleContainer>
        {/* <img src={placeholder} alt='info'></img> */}
        <Subtitle id="ArtworkContainer_Photography">攝影作品集</Subtitle>
      </SubtitleContainer>
      {ArtWorkCards("Photography")}
      <SubtitleContainer>
        {/* <img src={placeholder} alt='info'></img> */}
        <Subtitle id="ArtworkContainer_Drawings">繪畫作品集</Subtitle>
      </SubtitleContainer>
      {ArtWorkCards("Drawings")}
      <SubtitleContainer>
        {/* <img src={placeholder} alt='info'></img> */}
        <Subtitle id="ArtworkContainer_Calligraphy">書法作品集</Subtitle>
      </SubtitleContainer>
      {ArtWorkCards("Calligraphy")}
      <SubtitleContainer>
        {/* <img src={placeholder} alt='info'></img> */}
        <Subtitle id="ArtworkContainer_Interactive">互動藝術作品集</Subtitle>
      </SubtitleContainer>
      {ArtWorkCards("Interactive")}
    </Container>
  );
};

export default IntroductionPage;
