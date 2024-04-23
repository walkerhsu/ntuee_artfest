import React from "react";
import { useNavigate } from "react-router-dom";
import galleryImgs from "../ImagesFile/GalleryImgs";
import "./galleryStyle.scss";

interface GalleryBlockProps {
  imgsrc: string;
    Chinese: string;
    English: string;
}

const GalleryBlock: React.FC<GalleryBlockProps> = ({ imgsrc, Chinese, English }) => {
  const navigate = useNavigate();
  const handleClick = (title: string) => () => {
    console.log(title);
    navigate("/introductions", { state: { title: title } });
    return;
  };
  return (
    <button
      style={{ outline: "none", background: "none", border: "none" }}
      onClick={handleClick(English)}
      className="gallery-item-wrapper"
    >
      <div className="gallery-item">
        <div
          className="gallery-item-image sepia"
          style={{backgroundImage: `url(${imgsrc})`}}
        >
          <div className="wordContainer">{Chinese}</div>
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
};

const titles = [
  { Chinese: "攝影", English: "Photography" },
  { Chinese: "繪畫", English: "Drawings" },
  { Chinese: "影視欣賞", English: "Audiovisual" },
  { Chinese: "書法", English: "Calligraphy" },
  { Chinese: "互動藝術", English: "Interactive" },
];

export const Gallery: React.FC = () => {
  return (
    <div className="gallery">
      {galleryImgs.map((imgsrc, index) => (
          <GalleryBlock imgsrc={imgsrc} Chinese={titles[index]["Chinese"]} English={ titles[index]["English"]} key={index} />
      ))}
    </div>
  );
};
