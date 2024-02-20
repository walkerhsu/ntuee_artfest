// NewsPage.tsx
import React from 'react';
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
const NewsPage: React.FC = () => {
  return (
    <Container>
      Latest News
      <Section>
        <Title>News Title</Title>
        <Paragraph>
          {/* Add news content here */}
          This is the latest news content.
        </Paragraph>
      </Section>
    </Container>
  );
}

export default NewsPage;
