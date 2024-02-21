// IntroductionPage.tsx
import React from 'react';
import styled from 'styled-components';
import { ArtworkCard } from '../components/IntroPage/ArtworkCard';
import Images from '../components/ImagesFile/Images';
import Intro from '../components/HomePage/Introduction';
import ScrollToTop from '../components/IntroPage/ScrollToTop';

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
    img{
        width: 1.5rem;
        height: 1.5rem;
        margin-right: 0.7rem;
    }

`;

const Subtitle = styled.h3`
  font-size: 1.5rem;
`;



// Component
const IntroductionPage: React.FC = () => {
  return (
    <Container>
        <ScrollToTop />
        <SubtitleContainer>
            {/* <img src={placeholder} alt='info'></img> */}
            <Subtitle>攝影作品集</Subtitle>
        </SubtitleContainer>
        <ArtworkContainer>
            {Images.map((image, index) => {
                return (
                    <ArtworkCard image={image} index={index} introduction={Intro[index]}/>
                );
            })}
        </ArtworkContainer>
        <SubtitleContainer>
            {/* <img src={placeholder} alt='info'></img> */}
            <Subtitle>繪畫作品集</Subtitle>
        </SubtitleContainer>
        <ArtworkContainer>
            {Images.map((image, index) => {
                return (
                    <ArtworkCard image={image} index={index} introduction={Intro[index]}/>
                );
            })}
        </ArtworkContainer>
        <SubtitleContainer>
            {/* <img src={placeholder} alt='info'></img> */}
            <Subtitle>書法作品集</Subtitle>
        </SubtitleContainer>
        <ArtworkContainer>
            {Images.map((image, index) => {
                return (
                    <ArtworkCard image={image} index={index} introduction={Intro[index]}/>
                );
            })}
        </ArtworkContainer>
        <SubtitleContainer>
            {/* <img src={placeholder} alt='info'></img> */}
            <Subtitle>互動藝術作品集</Subtitle>
        </SubtitleContainer>
        <ArtworkContainer>
            {Images.map((image, index) => {
                return (
                    <ArtworkCard image={image} index={index} introduction={Intro[index]}/>
                );
            })}
        </ArtworkContainer>
    </Container>
  );
}

export default IntroductionPage;
