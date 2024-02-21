import React from "react";
import styled from "styled-components";
import news from "../../images/news.jpg";

const OuterContainer = styled.div`
  width: 100%;
  height: 28vh;
  display: flex;
  padding:0;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: 1px solid #000;

`;
const NewsContainer = styled.button`
  max-width: 100%;
  min-width: 80%;
  height: 25vh;
  background-color: #ffffff;
  border-radius: 3px;
  border: 1px solid #a1a1a1;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  transition: all 0.45s ease-in;
  .pic {
    max-width: 85%;
    min-width: 31.5%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      overflow: hidden;
      pointer-events: none;
    }
  }
  &:hover {
    transform: scale(1.0375);
    cursor: pointer;
  }
`;
const WordContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid #a1a1a1;
  justify-content: flex-start;
  margin-left: 1rem;
  .title {
    font-size: 1.5rem;
    font-weight: bold;
  }
  .introduction {
    font-size: 1rem;
  }
`;

const TitleContainer = styled.div`
  min-width: 90%;
  height: 30%;
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid black;
  padding: 1rem;
  margin-top: 0.5rem;
  margin-left: 2rem;
  margin-right: 2rem;
  margin-bottom: 1rem;
`;

const DescriptionContainer = styled.div`
  min-width: 90%;
  height: 50%;
  font-size: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid black;
  padding: 1rem;
  margin-left: 2rem;
  margin-right: 2rem;
  margin-bottom: 0.5rem;
`;

interface NewsProps {
  newsImage: string;
  index: number;
  title: string;
  description: string;
}

export const NewsBlock: React.FC<NewsProps> = ({
  newsImage,
  index,
  title,
  description,
}) => {
  const handleClick = () => {
    // route to news page
    console.log("click");
  };
  return (
    <OuterContainer>
      <NewsContainer onClick={handleClick}>
        <div className="pic">
          <img src={newsImage} />
        </div>
        <WordContainer>
          <TitleContainer>{title}</TitleContainer>
          <DescriptionContainer>{description}</DescriptionContainer>
        </WordContainer>
      </NewsContainer>
    </OuterContainer>
  );
};
// {image, index, introduction}
