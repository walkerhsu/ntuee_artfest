// NewsPage.tsx
import React from "react";
import styled from "styled-components";
import { NewsBlock } from "../components/NewsPage/NewsBlock";
import NewsImgs from "../components/ImagesFile/NewsImgs";

// Styled components
const Container = styled.div`
  width: 97%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border: 1px solid #000;
`;

const NewsSectionContainer = styled.div`
  width: 100%;
  height: 150vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 2rem;
  border: 1px solid #000;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const TitleContainer = styled.div`
  width: 14vw;
  height: 7vh;
  border: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 2rem;
  img {
    width: 1.5rem;
    height: 1.5rem;
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
        <Title>～最新貼文～</Title>
      </TitleContainer>
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
