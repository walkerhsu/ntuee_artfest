// HomePage.tsx
import React from 'react';
import { useRef, RefObject, useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import gallery from '../images/gallery.jpg';
import mainVisual from '../images/mainVisual_h.png';
import { Card } from '../components/Card';
import { motion } from 'framer-motion';
import Images from '../components/ImagesFile/Images';
import Intro from '../components/Introduction';

// Styled components
const TitleContainer = styled.h3`
  width: 40%;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 2px solid #000;
  padding: 3rem;
`;

const MainContainer = styled.div`
  width: 100%;
  min-width: 1280px;
  height: 100%;
  text-align: center;
  flex-direction: column;
  align-center: center;
  justify-content: center;
  margin: 0.5rem;
  padding: 0.5rem;
  border: 1px solid #000;
  background-image: url(${gallery});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  .row {
    width: 100%;
    display: flex;
    align-items: center;
  }
`;
const WordContainer = styled.div.attrs<{ size: number }, { width: number; height: number }>((props) => ({width: props.width, height: props.height}))<{ size: number }>`
    width: ${(props) => props.size}px;
    height: ${(props) => props.size}px;
    border: 1px solid #000;
    text-align: left;
`;

const Title = styled.h1`
    font-size: 3rem;
    margin-bottom: 2rem;
`;

const GridContainer = styled.div.attrs<{ size: number }, { width: number; height: number }>((props) => ({width: props.width, height: props.height}))<{ size: number }>`
    width: 100%;
    height: ${(props) => props.size}px;
    border: 3px solid #111;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.5rem;
    .carousel {
        cursor: grab;
        width: 100%;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        .inner-carousel {
            display: flex;
            flex-direction: row;
            gap: 1rem;
            padding: 1rem;
        }
    }
`;

// Component
const HomePage: React.FC = () => {
  const [width, setWidth] = useState(0);
  const carousel: RefObject<HTMLDivElement>  = useRef(null);

  useEffect(() => {
    setWidth(carousel.current!.scrollWidth - carousel.current!.clientWidth)
  },[]);

  return (
    <div>
        <MainContainer>
            <TitleContainer>
                <WordContainer size={500}>
                    <Title>瞬感</Title>
                </WordContainer>
            </TitleContainer>
            
        </MainContainer>
        <GridContainer size={580}>
            <motion.div ref={carousel} whileTap={{cursor: "grabbing"}} className='carousel'>
                <motion.div drag='x' dragConstraints={{right: 0, left: -width}} className='inner-carousel'>
                    {Images.map((image, index) => {
                        return (
                            <Card image={image} index={index} introduction={Intro[index]}/>
                        );
                    })}
                </motion.div>
            </motion.div>
        </GridContainer>
    </div>
  );
}

export default HomePage;
