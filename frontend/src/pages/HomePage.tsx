// HomePage.tsx
import React from "react";
import { useRef, RefObject, useState, useEffect } from "react";
import styled from "styled-components";
import gallery from "../images/gallery.jpg";
import { ArtworkCard } from "../components/ArtworkCard";
import { motion } from "framer-motion";
import { IMAGE_INFO } from "../images/exhibits_info";

// Styled components
const TitleContainer = styled.h3`
  width: 40%;
  display: flex;
  flex-direction: row;
  align-items: center;
  // border: 2px solid #000;
  padding: 3rem;
`;

const MainContainer = styled.div`
  width: calc(100% - 2rem - 2px);
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
const WordContainer = styled.div.attrs<
  { size: number },
  { width: number; height: number }
>((props) => ({ width: props.width, height: props.height }))<{ size: number }>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  // border: 1px solid #000;
  text-align: left;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
`;

const GridContainer = styled.div`
  width: calc(100%-6px-1rem);
  height: 750px;
  // border: 3px solid #111;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
  .carousel {
    cursor: grab;
    width: 100%;
    height: 100%;
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
  const carousel: RefObject<HTMLDivElement> = useRef(null);

  useEffect(() => {
    setWidth(carousel.current!.scrollWidth - carousel.current!.clientWidth);
  }, []);

  return (
    <>
      <MainContainer>
        <TitleContainer>
          <WordContainer size={500}>
            <Title>瞬感</Title>
          </WordContainer>
        </TitleContainer>
      </MainContainer>
      <GridContainer>
        <motion.div
          ref={carousel}
          whileTap={{ cursor: "grabbing" }}
          className="carousel"
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="inner-carousel"
          >
            {IMAGE_INFO.map((image_classes, _) => {
              return image_classes.images.map((image, index_image) => {
                return (
                  <ArtworkCard
                    image={image["image"]}
                    index={index_image}
                    type={image_classes["type"]}
                    title={image["title"]}
                    author={image["author"]}
                    introduction={image["introduction"]}
                  />
                );
              });
            })}
          </motion.div>
        </motion.div>
      </GridContainer>
      {/* <AboutUsPage /> */}
    </>
  );
};

export default HomePage;
