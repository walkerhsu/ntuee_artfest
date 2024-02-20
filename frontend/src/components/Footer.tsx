import React, { useRef, useState } from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
    background-color: #f8f9fa;
    padding: 1rem;
    text-align: center;
    position: relative;
    bottom: 0;
    width: 100%;
    height: 100px;
    border: 1px solid #000;
    footer {
        p {
            margin: 0;
        }
    }
`;
interface FProps {
    ref: React.RefObject<HTMLDivElement>;
};
const Footer: React.FC <FProps> = ({ref}) => {
    return (
        <FooterContainer ref={ref}>
            <footer>
                <p>© 2024 NTUEE Art Festival</p>
            </footer>
        </FooterContainer>
    );
};

export default Footer;