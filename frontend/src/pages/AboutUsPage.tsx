// ContactPage.tsx
import React, { useState } from 'react';
import styled from 'styled-components';

// Styled components
const Container = styled.div`
  padding: 2rem;
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const ContactInfo = styled.div`
  font-size: 1.2rem;
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
  const [question, setQuestion] = useState<string>('');
  const [answer, setAnswer] = useState<string>('');

  const handleQuestionSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Call your AI bot API here with the question
    // For demonstration purpose, let's assume the answer comes back as a string
    const response = await fetch(`your-bot-api-url?question=${encodeURIComponent(question)}`);
    const data = await response.json();
    setAnswer(data.answer);
  };

  return (
    <Container>
      <Section>
        <Title>藝術展簡介</Title>
        {/* Add introduction to the art festival */}
        <Paragraph>本屆藝術展的簡介內容。</Paragraph>
      </Section>
      <Section>
        <Title>創展過程</Title>
        {/* Add the process of creating the art festival */}
        <Paragraph>創展過程的相關描述。</Paragraph>
      </Section>
      <Section>
        <Title>籌辦單位人員介紹</Title>
        <PersonnelContainer>
          {/* <PersonnelImage src="person1.jpg" alt="Person 1" /> */}
          <PersonnelName>姓名1</PersonnelName>
          <PersonnelRole>負責組別1</PersonnelRole>
        </PersonnelContainer>
        <PersonnelContainer>
          {/* <PersonnelImage src="person2.jpg" alt="Person 2" /> */}
          <PersonnelName>姓名2</PersonnelName>
          <PersonnelRole>負責組別2</PersonnelRole>
        </PersonnelContainer>
        {/* Add more personnel as needed */}
      </Section>
      <Section>
        <Title>聯絡我們</Title>
        <ContactInfo>
          <p>Email: example@example.com</p>
          <p>Phone: 123-456-7890</p>
          <p>Address: 123 Street, City, Country</p>
        </ContactInfo>
      </Section>
      <Section>
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
      </Section>
    </Container>
  );
}

export default AboutUsPage;
