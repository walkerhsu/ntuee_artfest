import { useParams } from "react-router-dom";
import {IMAGE_INFO} from "../images/exhibits_info";
import "../CSS/DetailArtWorkPage.css";
import ErrorPage from "./ErrorPage";

const DetailArtWorkPage: React.FC = () => {
    const { type, index } = useParams();
    console.log(type, index)
    if (!type || !index) {
        return <ErrorPage />;
    }
    const image = IMAGE_INFO.find((image_classes) => image_classes.type === type)?.images[parseInt(index)];
    if (!image) {
        return <ErrorPage />;
    }
    console.log(image)
  return (
    <>
      {/* Wrapper */}
      <div id="wrapper">
        {/* Image */}
        <header id="header">
          <a href="index.html" className="logo">
            Back to Gallery
          </a>
        </header>
        {/* Main */}
        <div id="main">
          {/* Post */}
          <section className="post">
            <header className="major">
              <span className="date">DATE</span>
              <h1>
              TITLE OF  <br />
                THE ARTWORK
              </h1>
              <p>
                subtitle
              </p>
            </header>
            <div className="image main">
              <img src={image["image"]} alt="" />
            </div>
            <p>
            {image["introduction"]}

            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default DetailArtWorkPage;
