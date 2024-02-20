// ErrorPage.tsx
import React from 'react';
import styled from 'styled-components';

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const ErrorImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const Message = styled.p`
  font-size: 1.5rem;
  margin-top: 1rem;
`;

// Component
const ErrorPage: React.FC = () => {
  return (
    <Container>
      <ErrorImage src="/cute-error-image.jpg" alt="Cute Error" />
      <Message>這個路徑不對呦</Message>
    </Container>
  );
}

export default ErrorPage;
