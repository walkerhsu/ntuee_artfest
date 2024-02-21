import React from "react";
import { useNavigate } from "react-router-dom";
import galleryImgs from "../ImagesFile/GalleryImgs";
import "./galleryStyle.scss";

interface GalleryBlockProps {
    imgsrc: string;
    title: string;
}

const GalleryBlock:React.FC <GalleryBlockProps> = ({imgsrc, title}) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/introductions");
        // pageRef.current?.scrollIntoView({ behavior: "smooth" });
        // console.log(pageRef.current);
    }
    return (
        <button style={{outline: 'none', background: 'none', border: 'none'}} onClick={handleClick} className="gallery-item-wrapper">
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
        </button>
    );
}

const titles = ["攝影", "繪畫", "影視欣賞", "書法", "互動藝術",];

export const Gallery:React.FC = () => {
    return (
        <div className="gallery">
            {galleryImgs.map((imgsrc, index) => (
                <GalleryBlock imgsrc={imgsrc} title={titles[index]} key={index} />))}
        </div>
    );
}