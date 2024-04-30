// VisitPage.tsx
import React, { useRef } from "react";
import styled from "styled-components";
import visit from "../images/visit0.jpg";
import info from "../images/info.png";
import intro from "../images/intro.png";
import fakeVideo from "../images/fakeVideo.png";
import placeholder from "../images/placeholder.png";
import idea from "../images/idea.png";
import { Gallery } from "../components/VisitPage/Gallery";

// Styled components
const Container = styled.div`
  padding: 2rem;
`;

const TitleContainer = styled.div`
  width: 100%;
  height: 7vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 2rem;
  img {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 0.7rem;
  }
`;

const SubtitleContainer = styled.div`
  width: 100%;
  height: 7vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 2rem;
  img {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 0.7rem;
  }
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  width: 100%;
  img {
    width: 100%;
    height: 100%;
  }
`;

const VideoBlockContainer = styled.div`
  width: 100%;
  height: 1000px;
  // border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 2rem;
  .singleVideoBlock {
    width: 100%;
    height: 500px;
    border: 1px solid black;
    // margin: 0rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    .videoIntroWord {
      width: 25%;
      height: 85%;
      // border: 1px solid black;
      margin: 0.5rem;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
    }

    .videoIntroVideo {
      width: 75%;
      height: 96%;
      // border: 1px solid black;
      padding: 2%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
    }

    @media screen and (max-width: 768px) {
      flex-direction: column;
      height: 760px;
      .videoIntroWord {
        width: 100%;
        height: 20%;
      }
      .videoIntroVideo {
        width: 100%;
        height: 80%;
      }
    }
  }
`;

const Section = styled.section`
  width: 100%;
  margin-bottom: 2rem;
`;

const Title = styled.h3`
  font-size: 1.5rem;
`;

const Subtitle = styled.h3`
  font-size: 1.5rem;
`;

const ParagraphContainer = styled.div`
  width: 100%;
  height: 200px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 2rem;
  .block {
    width: 100%;
    height: 50%;
    // border: 1px solid black;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
`;

const VideoContainer = styled.div`
  position: relative;
  height: 100%;
  width: 94%;
  margin: 2rem 3%;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    user-drag: none;
    -webkit-user-drag: none;
    z-index: 1;
  }
`;

const VisitPage: React.FC = () => {
  const openingIframeRef = useRef<HTMLIFrameElement>(null);
  const closingIframeRef = useRef<HTMLIFrameElement>(null);
  const playVideo = (idx: number) => () => {
    //  set the overlay image display to none
    const videoContainer =
      document.getElementsByClassName("videoIntroVideo")[idx];
    const overlayImage = videoContainer?.querySelector("img");
    if (overlayImage) {
      overlayImage.style.display = "none";
    }
    // play the video
    if (idx === 0) {
      if (openingIframeRef.current) {
        openingIframeRef.current.style.display = "block";
        console.log(openingIframeRef.current);
        openingIframeRef.current.src += "?autoplay=1";
      }
    } else {
      if (closingIframeRef.current) {
        closingIframeRef.current.style.display = "block";
        console.log(closingIframeRef.current);
        closingIframeRef.current.src += "?autoplay=1";
      }
    }
  };
  return (
    <Container>
      <Section>
        <TitleContainer>
          <img src={info} alt="info"></img>
          <Title>展覽資訊</Title>
        </TitleContainer>
        <ImgContainer>
          <img src={visit} alt="Visit" />
        </ImgContainer>
        <VideoBlockContainer>
          <div className="singleVideoBlock">
            <div className="videoIntroWord">
              <Subtitle>開幕影片</Subtitle>
              <p>開幕影片簡介...</p>
            </div>
            <div className="videoIntroVideo">
              <VideoContainer>
                {/* Add opening video */}
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Opening Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  ref={openingIframeRef}
                  style={{ display: "none" }}
                ></iframe>
                <img src={fakeVideo} alt="iframeImage" onClick={playVideo(0)} />
              </VideoContainer>
            </div>
          </div>
          <div className="singleVideoBlock">
            <div className="videoIntroWord">
              <Subtitle>閉幕影片</Subtitle>
              <p>閉幕影片簡介...</p>
            </div>
            <div className="videoIntroVideo">
              <VideoContainer>
                {/* Add opening video */}
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Opening Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  ref={closingIframeRef}
                  style={{ display: "none" }}
                ></iframe>
                {/* <a href="https://www.youtube.com/embed/dQw4w9WgXcQ"> */}
                <img src={fakeVideo} alt="iframeImage" onClick={playVideo(1)} />
                {/* </a> */}
              </VideoContainer>
            </div>
          </div>
        </VideoBlockContainer>

        <SubtitleContainer>
          <img src={placeholder} alt="info"></img>
          <Subtitle>展覽時間地點</Subtitle>
        </SubtitleContainer>

        <ParagraphContainer>
          <div className="block">日期：2024/04/22 ~ 2024/05/03</div>
          <div className="block">開放參觀時間：10:00 ~ 16:00</div>
          <div className="block">地點：臺大電機博理藝廊 B1</div>
        </ParagraphContainer>

        <SubtitleContainer>
          <img src={idea} alt="info"></img>
          <Subtitle>展覽重點</Subtitle>
        </SubtitleContainer>

        <ParagraphContainer>
          {/* Add exhibition highlights */}
          展覽重點的描述。
        </ParagraphContainer>

        <SubtitleContainer>
          <img src={intro} alt="info"></img>
          <Subtitle>展區介紹</Subtitle>
        </SubtitleContainer>

        <Gallery />
      </Section>
    </Container>
  );
};

export default VisitPage;
