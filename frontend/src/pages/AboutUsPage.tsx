// ContactPage.tsx
import React from "react";
import styled from "styled-components";
import mainVisual_h from "../images/mainVisual_h.jpg";
import mainVisual_v from "../images/mainVisual_v.jpg";


// Styled components
const Container = styled.div`
  padding: 0rem;
`;
const HeaderContainer = styled.div`
  // width: calc(100vw - 4rem - 1.6rem);
  // height: 40vh;
  display: grid;
  grid-column-gap: 1.6rem;
  grid-template-columns: 1fr 40%;
  justify-content: flex-start;
  align-content: start;
  align-items: center;
  position: relative;
  padding: 0.5rem 2rem;
  // border: 1px solid #000; 
  .tab {
    display: inline-block;
    margin-left: 80px;
    @media (max-width:  1290px) {
      margin-left: 80px;
    }
    @media (max-width:  1130px) {
      margin-left: 80px;
    }
    @media (max-width:  970px) {
      margin-left: 40px;
    }
    @media (max-width:  860px) {
      margin-left: 30px;
    }
    @media (max-width:  445px) {
      margin-left: 15px;
    }
    @media (max-width:  383px) {
      margin-left: 10px;
    }
  }
  .word {
    width: 50vw;
    height: auto;
    max-height: 37.5vh;
<<<<<<< Updated upstream
    overflow: hidden;
=======
    border: 1px solid #000;
>>>>>>> Stashed changes
    display: inline-block;
    margin-left: 10px;
  }
  .pic {
    // width: 30vw;
    // height: 30vh;
    max-height: 37.5vh;
    border-radius: 30px;
    overflow: hidden;
    display: inline-block;
    margin-left: 10px;
    .pic_v {
      @media (min-width:  500px) {
        display: none;
      }
    }
    .pic_h {
      @media (max-width:  500px) {
        display: none;
      }
    }
    img {
      width: 100%;
      // height: 100%;
    }
  }
  @media (max-width: 700px) {
  }
`;

const HeaderTitle = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 2rem;
  @media (max-width:  1290px) {
    font-size: 3rem;
  }
  @media (max-width:  1130px) {
    font-size: 2.5rem;
  }
  @media (max-width:  970px) {
    font-size: 2.4053rem;
  }
  @media (max-width:  830px) {
    font-size: 2rem;
  }
  @media (max-width:  700px) {
    font-size: 1.6rem;
  }
  @media (max-width:  572px) {
    font-size: 1.2rem;
  }
  @media (max-width:  415px) {
    font-size: 1.1rem;
  }
`;

const HeaderSubtitle = styled.div`
  font-size: 1rem;
<<<<<<< Updated upstream
  line-height: 1.3;
  @media (max-width:  1290px) {
    font-size: 0.9rem;
  }
  @media (max-width:  1130px) {
    font-size: 0.8rem;
  }
  @media (max-width:  970px) {
    font-size: 0.7rem;
  }
  @media (max-width:  830px) {
    font-size: 0.6rem;
  }
  @media (max-width:  830px) {
    font-size: 0.55rem;
  }
  @media (max-width:  415px) {
    font-size: 0.45rem;
  }
=======
  line-height: 1.5;
  overflow-y: scroll;
>>>>>>> Stashed changes
`;

const ContributerContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid #000;
`;

const Contributer = styled.div`
  width: 20%;
  height: 100%;
`;

// Component
const AboutUsPage: React.FC = () => {
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
          <img className="pic_h" src={mainVisual_h} alt="Art" />
          <img className="pic_v" src={mainVisual_v} alt="Art" />
        </div>
      </HeaderContainer>
      <ContributerContainer>
        <Contributer>
          <img src={"/contributors/hershey.jpg"} alt="Hershey" width="100%" />
        </Contributer>
        <Contributer>
          <img src={"/contributors/EESA.jpg"} alt="Hershey" width="100%" />
        </Contributer>
        <Contributer>
          <img
            src={"/contributors/RYB.png"}
            alt="紅然股份有限公司"
            width="100%"
          />
        </Contributer>
      </ContributerContainer>
    </Container>
  );
};

export default AboutUsPage;
