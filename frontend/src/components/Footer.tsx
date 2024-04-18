import React, { useRef, useState } from "react";
import styled from "styled-components";

const LeftFooter = styled.div`
  width: 100%;
  border-radius: 50%;
`;

const IconImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

const FooterContainer = styled.div`
  background-color: #f8f9fa;
  padding: 1rem;
  text-align: center;
  position: relative;
  bottom: 0;
  width: calc(100%-2rem);
  footer {
    p {
      margin: 0;
    }
  }
`;

const MiddleFooter = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const ImagesContainer = styled.div`
  display: flex;
  width: 60%;
  padding: 0 20%;
  justify-content: space-evenly;
`;

const SingleImageContainer = styled.div`
  width: 15%;
  &:hover {
    transform: scale(1.2);
    transition: transform 0.5s;
    cursor: pointer;
  }

  &:active {
    transform: scale(1);
    opacity: 0.8;
  }

`;

const RightFooter = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 2fr 1fr;
    grid-template-columns: 1fr;
    justify-content: space-evenly;
    align-items: center;
`;

const ContributerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Contributer = styled.div`
  display: inline-block;
`;

interface FProps {
  ref: React.RefObject<HTMLDivElement>;
}
const Footer: React.FC<FProps> = ({ ref }) => {
  return (
    <FooterContainer ref={ref}>
      <footer>
        <LeftFooter>
          <IconImage
            src="/mainIcon.png"
            alt="mainIcon"
            width="100%"
            height="100%"
          />
        </LeftFooter>
        <div></div>
        <MiddleFooter>
          {/* <div style={{height: "5%"}}> */}
          {/* <img src="/facebook.png" alt="facebook" width="100%" height="100%"/> */}
          {/* </div> */}
          <ImagesContainer>
            <SingleImageContainer>
              <a href="https://www.facebook.com/profile.php?id=100082950921250">
                <img src="/facebook.png" alt="facebook" width="100%" />
              </a>
            </SingleImageContainer>
            <SingleImageContainer>
              <a href="https://www.instagram.com/ntuee_artfest?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                <img src="/instagram.png" alt="instagram" width="100%" />
              </a>
            </SingleImageContainer>
            <SingleImageContainer>
              <a
                href="
              mailto:ntueeart@gmail.com"
              >
                <img src="/gmail.png" alt="Gmail" width="100%" />
              </a>
            </SingleImageContainer>
          </ImagesContainer>
                  <p style={{ fontSize: "150%" }}>© 2024 NTUEE Art Festival</p>
        </MiddleFooter>
        <RightFooter>
          <div style={{width: "100%"}}>
            <p style={{ fontSize: "150%" }}>Contributors</p>
            </div>
          <ContributerGrid>
            <Contributer>
            © Walker
            </Contributer>
            <Contributer>© Oscar</Contributer>
            <Contributer>© Wu</Contributer>
            <Contributer>© Hsieh</Contributer>
          </ContributerGrid>
        </RightFooter>
              
        {/* <p>asdfasdf</p> */}
      </footer>
    </FooterContainer>
  );
};

export default Footer;
