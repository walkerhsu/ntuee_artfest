// NewsPage.tsx
import React from 'react';
import styled from 'styled-components';

// Styled components
const Container = styled.div`
  width: 97%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border: 1px solid #000;
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const TitleContainer = styled.div`
    width: 14vw;
    height: 7vh;
    border: 1px solid #000;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
    img{
        width: 1.5rem;
        height: 1.5rem;
        margin-right: 0.7rem;
    }

`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
`;


// Component
const NewsPage: React.FC = () => {
  return (
    <Container>
      <TitleContainer>
        <Title>～最新貼文～</Title>
      </TitleContainer>    

    </Container>
  );
}

export default NewsPage;
