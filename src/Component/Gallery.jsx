import React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css'; // Default theme
import Button from "../Component/Button";
import GalleryData from '../Data/GalleryData.json';


const Gallery = () => {
  return (
    <div className="gallery-container">
      <div className="title">
        <h2>{GalleryData.title}</h2>
      </div>
      <Splide
      options={{
        width: "100%",
        rewind: true,
        autoplay: "true",
        perPage: 2,
        perMove: "1",
        gap: "2rem",
        height: "15rem",
        type: "loop",
        rewindSpeed: "3000",
        arrows: "true",
        pagination: "false",
        autoScroll: {
          speed: 3,
          pauseOnHover: true,
          pauseOnFocus: false,
        },
        breakpoints: {
          1000: {
            perPage: 1,
          },
        },
      }}
      >
        {GalleryData.tools.map((tool, index) => (
          <SplideSlide key={index}>
            <div className="gal">
              <div className="images">
                <div className="image">
                  <img src={tool.image} alt={tool.text} />
                </div>
                <div className="doddle">
                  <img src={tool.doddle} alt={tool.text} />
                </div>
              </div>
              <p className="image_text">{tool.text}</p>
            </div>
          </SplideSlide>
        ))}
      </Splide>
      <Button text={GalleryData.button.text} link={GalleryData.button.link} />
    </div>
  );
};

export default Gallery;