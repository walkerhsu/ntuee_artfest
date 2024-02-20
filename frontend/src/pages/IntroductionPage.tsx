// IntroductionPage.tsx
import React from 'react';
import styled from 'styled-components';

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const ArtworkImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 2rem;
`;

const ArtworkDescription = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

const AuthorInfo = styled.div`
  border-top: 1px solid #ccc;
  padding-top: 2rem;
  text-align: center;
`;

const AuthorName = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const AuthorBio = styled.p`
  font-size: 1.2rem;
`;

// Component
const IntroductionPage: React.FC = () => {
  return (
    <Container>
      <ArtworkImage src="your-artwork-image-url.jpg" alt="Artwork" />
      <ArtworkDescription>
        {/* Add your artwork description here */}
        This is the description of the artwork.
      </ArtworkDescription>
      <AuthorInfo>
        <AuthorName>Author's Name</AuthorName>
        <AuthorBio>
          {/* Add author's bio here */}
          This is the author's bio.
        </AuthorBio>
      </AuthorInfo>
      {/* You can add additional content here as needed */}
    </Container>
  );
}

export default IntroductionPage;
