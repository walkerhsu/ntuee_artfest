// ErrorPage.tsx
import React from 'react';
import styled from 'styled-components';
import error404 from '../images/404.jpg';
import goback from '../images/back.png';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  overflow: hidden;
  z-index: -1;
`;

const ErrorImage = styled.img`
  max-width: 100%;
  height: 60vh;
`;

const Message = styled.p`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;
const GoBackContainer = styled.button`
    width: 8vw;
    height: 5vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    border: none;
    border-radius: 10px;
    margin-top: 0.7rem;
    &:hover {
        background-color: #EEE;
        cursor: pointer;
    }
    .icon {
        width: 30%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
            width: 70%;
            height: 50%;
        }
    }
    .content {
        width: 70%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1rem;
    }
    
`;

// Component
const ErrorPage: React.FC = () => {
  return (
    <Container>
        <ErrorImage src={error404} alt="Cute Error" />
        <Message>Oops! 這個路徑不對呦</Message>
        <GoBackContainer onClick={() => window.history.back()}>
            <div className='icon'>
                <img src={goback} alt='back'></img>
            </div>
            <div className='content'>回上一頁</div>
        </GoBackContainer>
    </Container>
  );
}

export default ErrorPage;
