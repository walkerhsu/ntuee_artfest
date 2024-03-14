import React from "react";
import styled from "styled-components";
import news from "../../images/news.jpg";

const OuterContainer = styled.div`
  width: 100%;
  height: 28vh;
  display: flex;
  padding: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #000;
`;
const NewsContainer = styled.button`
  width: 75%;
  height: 25vh;
  background-color: #ffffff;
  border-radius: 30px;
  border: 1px solid #a1a1a1;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  transition: all 0.45s ease-in;
  .pic {
    max-width: 30%;
    min-width: 30%;
    overflow: hidden;
    height: 100%;
    border: 1px solid #a1a1a1;
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
  width: 20vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border: 1px solid #a1a1a1;
  padding: 0.8rem;
  margin-left: 0.25rem;
  .title {
    font-size: 1.5rem;
    font-weight: bold;
  }
  .introduction {
    font-size: 1rem;
  }
  .tag {
    color: teal;
    text-align: center;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    background-color: rgba(191, 241, 245, 0.5);
    border-radius: 1rem;
    padding: 0.28rem 0.5rem 0.2rem;
    font-size: 0.66rem;
    font-weight: 600;
    position: relative;
  }
`;

const TitleContainer = styled.div`
  min-width: 90%;
  height: 30%;
  font-family: Poppins;
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  lines: 2;
  line-height: 1.1;
  padding: 0.2rem;
  margin-top: 0.5rem;
  margin-right: 2rem;
`;

const DescriptionContainer = styled.div`
  width: 20vw;
  height: 40%;
  font-family: Poppins;
  font-size: 1rem;
  line-height: 1.1;
  overflow: hidden;
  text-wrap: wrap;
  word-wrap: break-word;
  text-overflow: ellipsis;
  display: flex;
  align-items: flex-start;
  border: 1px solid black;
  border-radius: 1rem;
  padding: 0.2rem;
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
          <div className="tag">2024/02/23 Fri.</div>
          <TitleContainer>{title}</TitleContainer>
          <DescriptionContainer>{description}</DescriptionContainer>
        </WordContainer>
      </NewsContainer>
    </OuterContainer>
  );
};
// {image, index, introduction}
