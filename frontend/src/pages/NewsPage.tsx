// NewsPage.tsx
import React from "react";
import styled from "styled-components";
import { NewsBlock } from "../components/NewsPage/NewsBlock";
import NewsImgs from "../components/ImagesFile/NewsImgs";
import newspaper from '../images/newspaper.png';

// Styled components
const Container = styled.div`
  width: 97%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border: 1px solid #000;
  .section {
    width: 100%;
    padding-top: 3.2rem;
    padding-bottom: 3.2rem;
    position: relative;
  }
`;

const NewsSectionContainer = styled.div`
  width: 95%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: center;
  column-gap: 0px;
  row-gap: 10px;
  margin-bottom: 2rem;
  border: 1px solid #000;
  padding-left: 3.2rem;
  padding-right: 3.2rem;
`;

const Title = styled.h2`
  width: 15%;
  height: 30%;
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 0.3rem;
  margin-bottom: 0rem;
`;

const TitleContainer = styled.div`
  width: 100%;
  height: 20vh;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 2rem;
  background-image: url(${newspaper});
  background-size: 5vw;
  background-position: center;
  border: 1px solid #000;
  img {
    width: 2.5rem;
    height: 2.5rem;
    margin-right: 0.7rem;
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #000;
`;

const PageItem = styled.a`
    color: black;
    text-decoration: none;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 0.3rem;
    background-color: white;
    text-align: center;
    font-weight: 500;
    line-height: 1.5;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      background-color: #C39BD3;
      color: white;
    }
    &::active {
      background-color: #000;
    }
`
interface NewsPageProps {
  NewsImgs: {image: string, title: string, description: string}[];
};

// Component
const NewsPage: React.FC <NewsPageProps> = ({NewsImgs}) => {
  return (
    <Container>
      <TitleContainer>
        <Title>
          {/* <img src={newspaper} alt="newspaper"></img> */}
          ～最新貼文～
        </Title>
      </TitleContainer>
      {/* <section className="section"></section> */}
      <NewsSectionContainer>
        {NewsImgs.map((news, index) => {
          return (
            <NewsBlock
              newsImage={news.image}
              index={index}
              title={news.title}
              description={news.description}
            />
          );
        })}
      </NewsSectionContainer>
      <ButtonContainer>
        <PageItem href="/news">1</PageItem>
        <PageItem href="/news/2">2</PageItem>
        <PageItem href="/news/3">3</PageItem>
        <PageItem href="/news/4">4</PageItem>
      </ButtonContainer>
    </Container>
  );
};

export default NewsPage;
