// ContactPage.tsx
import React, { useState } from "react";
import styled from "styled-components";
import mainVisual_v from "../images/mainVisual_h.jpg";

// Styled components
const Container = styled.div`
  padding: 2rem;
`;
const HeaderContainer = styled.div`
  width: 90vw;
  height: 40vh;
  display: grid;
  grid-column-gap: 1.6rem;
  grid-row-gap: 1rem;
  grid-template-rows: auto;
  grid-template-columns: 1fr 42%;
  justify-content: flex-start;
  align-content: start;
  align-items: center;
  position: relative;
  padding-top: 2rem;
  padding-left: 4.8rem;
  padding-right: 2.4rem;
  border: 1px solid #000;
  .tab {
    display: inline-block;
    margin-left: 80px;
  }
  .word {
    width: 50vw;
    height: auto;
    max-height: 37.5vh;
    overflow: hidden;
    border: 1px solid #000;
    display: inline-block;
    margin-left: 10px;
  }
  .pic {
    width: 30vw;
    height: 30vh;
    max-height: 37.5vh;
    border: 1px solid #000;
    border-radius: 30px;
    overflow: hidden;
    display: inline-block;
    margin-left: 10px;
    img {
      width: 100%;
      height: 100%;
    }
  }
`;

const HeaderTitle = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 2rem;
`;

const HeaderSubtitle = styled.div`
  font-size: 1rem;
  line-height: 1.3;
`;

const QuestionForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #333;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const Answer = styled.div`
  margin-top: 1rem;
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
`;

const PersonnelContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PersonnelImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 1rem;
`;

const PersonnelName = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const PersonnelRole = styled.p`
  font-size: 1.2rem;
`;

// Component
const AboutUsPage: React.FC = () => {
  const [question, setQuestion] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");

  const handleQuestionSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Call your AI bot API here with the question
    // For demonstration purpose, let's assume the answer comes back as a string
    const response = await fetch(
      `your-bot-api-url?question=${encodeURIComponent(question)}`
    );
    const data = await response.json();
    setAnswer(data.answer);
  };

  return (
    <Container>
      <HeaderContainer>
        <div className="word">
          <HeaderTitle>
            「藝術一瞬 
            <div className="tab" />
            感動永恆」
          </HeaderTitle>
          <HeaderSubtitle>
          在藝術的殿堂裡，一瞬間成就永恆。畫筆輕撫畫布，如詩如畫地描繪著情感的交錯，色彩的交融。音符飄逸在空氣中，彷彿是靈魂的共鳴，撫慰著每一顆疲憊的心靈。

          這裡是藝術的聚集地，是夢想的搖籃，是感動的源泉。每一幅畫作都是一段故事的開始，每一首樂曲都是一場心靈的對話。在這片藝術的海洋裡，我們不僅能夠看見，更能夠感受到，那些美好的瞬間，那些永恆的價值。

          藝術一瞬，感動永恆。那一刻的震撼，那一刻的感動，將伴隨著我們走過人生的旅程，永遠在心中閃耀。讓我們沉浸在藝術的海洋中，讓我們感受那份純淨的美好，讓我們一起去探索，去追尋，去創造。
          </HeaderSubtitle>
        </div>
        <div className="pic">
          <img src={mainVisual_v} alt="Art" />
        </div>
      </HeaderContainer>
      {/* <Section>
        <Title>問題詢問</Title>
        <QuestionForm onSubmit={handleQuestionSubmit}>
          <Input
            type="text"
            placeholder="輸入你的問題"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
          <Button type="submit">提交</Button>
        </QuestionForm>
        {answer && <Answer>{answer}</Answer>}
      </Section> */}
    </Container>
  );
};

export default AboutUsPage;
