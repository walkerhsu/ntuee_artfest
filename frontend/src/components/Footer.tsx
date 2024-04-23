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
  padding: 2%;
  text-align: center;
  position: relative;
  bottom: 0;
  width: calc(96%);
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
  .footer_logo_word {
    font-size: 1.5rem;
    @media (max-width: 850px) {
      font-size: 1.0rem;
    }
    @media (max-width: 610px) {
      font-size: 0.7rem;
    }
    @media (max-width: 466px) {
      font-size: 0.6rem;
    }
  }
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
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr;
  justify-content: space-evenly;
  align-items: center;
  p {
    font-size: 1.5rem;
    @media (max-width: 850px) {
      font-size: 1rem;
    }
    @media (max-width: 610px) {
      font-size: 0.8rem;
    }
    @media (max-width: 466px) {
      font-size: 0.6rem;
    }
  }
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
  p {
    font-size: 1.3rem;
    @media (max-width: 1200px) {
      font-size: 1rem;
    }
    @media (max-width: 850px) {
      font-size: 0.8rem;
    }
    @media (max-width: 610px) {
      font-size: 0.6rem;
    }
    @media (max-width: 466px) {
      font-size: 0.5rem;
    }
  }
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
          <p className="footer_logo_word">© 2024 NTUEE Art Festival</p>
        </MiddleFooter>
        <RightFooter>
          <div style={{ width: "100%" }}>
            <p>Contributors</p>
          </div>
          <ContributerGrid>
            <Contributer>
              <p>© Walker</p>
            </Contributer>
            <Contributer>
              <p>© Oscar</p>
            </Contributer>
            <Contributer>
              <p>© Wu</p>
            </Contributer>
            <Contributer>
              <p>© Hsieh</p>
            </Contributer>
          </ContributerGrid>
        </RightFooter>
      </footer>
    </FooterContainer>
  );
};

export default Footer;
