import React from "react";
import styled from 'styled-components';
import galleryImgs from "./ImagesFile/GalleryImgs";
import "./style.scss";

// const WordContainer = styled.h1`
//     font-size: 3rem;
//     display: inline-block;
//     position: absolute;
//     right: 1.5%;
//     top: 50%;
//     z-index: 10;
//     color: white;
//     text-align: center;
//     border-radius: 10px;
//     transition: all 0.5s ease-in;
//     &:hover ${} {
//         background-color: #333;
//     }
// `;

interface GalleryProps {
    imgsrc: string;
    title: string;
}

const GalleryBlock:React.FC <GalleryProps> = ({imgsrc, title}) => {
    return (
        <div className="gallery-item-wrapper">
            <div className="gallery-item">
                <div className="gallery-item-image sepia" 
                    style={{ backgroundImage: `url(${imgsrc})`}}>
                    <div className="wordContainer">
                        {title}
                    </div>
                </div>

                {/* <div className="gallery-item-image masked"
                    style={{ backgroundImage: `url(${imgsrc})` }}>
                    <WordContainer>
                        Artwork
                    </WordContainer>
                </div> */}
            </div>
        </div>
    );
}

const titles = ["攝影", "繪畫", "影視欣賞", "書法", "互動藝術",];

export const Gallery = () => {
    return (
        <div className="gallery">
            {galleryImgs.map((imgsrc, index) => (
                <GalleryBlock imgsrc={imgsrc} title={titles[index]} key={index} />))}
        </div>
    );
}