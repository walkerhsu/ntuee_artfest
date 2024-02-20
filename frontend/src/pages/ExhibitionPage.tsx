// ExhibitionPage.tsx
import React from 'react';
import styled from 'styled-components';
import exhibition from '../components/ImagesFile/UrlImages'
import visit from '../images/visit0.jpg'
import info from '../images/info.png'
import intro from '../images/intro.png';
import placeholder from '../images/placeholder.png';
import idea from '../images/idea.png';
import { Gallery } from '../components/Gallery';

// Styled components
const Container = styled.div`
  padding: 2rem;
`;

const TitleContainer = styled.div`
    width: 9vw;
    height: 7vh;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 2rem;
    img{
        width: 1.25rem;
        height: 1.25rem;
    }

`;

const SubtitleContainer = styled.div`
    width: 12vw;
    height: 7vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 2rem;
    img{
        width: 1.5rem;
        height: 1.5rem;
        margin-right: 0.7rem;
    }

`;

const ImgContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
    img{
        width: 200%;
        height: 100%;
    }
`;

const VideoBlockContainer = styled.div`
    width: 100%;
    height: 760px;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 2rem;
    .singleVideoBlock{
        width: 80%;
        height: 372px;
        border: 1px solid black;
        margin: 0.5rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        .videoIntro{
            width: 50%;
            height: 85%;
            border: 1px solid black;
            margin: 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
        }
    }

`

const Section = styled.section`
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
    .block{
        width: 100%;
        height: 50%;
        border: 1px solid black;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }
`;

const VideoContainer = styled.div`
  margin-bottom: 2rem;
`;

// Component
const ExhibitionPage: React.FC = () => {
  return (
    <Container>
      <Section>
        <TitleContainer>
            <img src={info} alt='info'></img>
            <Title>展覽資訊</Title>
        </TitleContainer>
        <ImgContainer>
            <img src={visit} alt="Exhibition" />
        </ImgContainer>
        <VideoBlockContainer>
            <div className="singleVideoBlock">
                <div className='videoIntro'>
                    <Subtitle>開幕影片</Subtitle>
                    <p>開幕影片簡介...</p>
                </div>
                <div className='videoIntro'>
                    <VideoContainer>
                    {/* Add opening video */}
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Opening Video" allowFullScreen></iframe>
                    </VideoContainer>
                </div>
            </div>
            <div className="singleVideoBlock">
                <div className='videoIntro'>
                    <Subtitle>閉幕影片</Subtitle>
                    <p>閉幕影片簡介...</p>
                </div>
                <div className='videoIntro'>
                    <VideoContainer>
                    {/* Add opening video */}
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Opening Video" allowFullScreen></iframe>
                    </VideoContainer>
                </div>
            </div>
        </VideoBlockContainer>
        
        <SubtitleContainer>
            <img src={placeholder} alt='info'></img>
            <Subtitle>展覽時間地點</Subtitle>
        </SubtitleContainer>

        <ParagraphContainer>
            <div className='block'>
                日期：2024/04/22 ~ 2024/05/03
            </div>
            <div className='block'>
                開放參觀時間：10:00 ~ 16:00
            </div>
            <div className='block'>
                地點：臺大電機博理藝廊 B1
            </div>
        </ParagraphContainer>

        <SubtitleContainer>
            <img src={idea} alt='info'></img>
            <Subtitle>展覽重點</Subtitle>
        </SubtitleContainer>
        
        <ParagraphContainer>
          {/* Add exhibition highlights */}
          展覽重點的描述。
        </ParagraphContainer>

        <SubtitleContainer>
            <img src={intro} alt='info'></img>
            <Subtitle>展區介紹</Subtitle>
        </SubtitleContainer>

        
        <Gallery />
        

      </Section>
      
    </Container>
  );
}

export default ExhibitionPage;
