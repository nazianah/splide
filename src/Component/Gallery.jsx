import React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css'; // Default theme
import Button from "../Component/Button";
import GalleryData from '../Data/GalleryData.json';
import "./Gallery.css"

const Gallery = () => {
  return (
    <div className="gal">
    <div className="gallery-container">
      <div className="title">
        <h2>{GalleryData.title}</h2>
      </div>
      <Splide
  options={{
    type: 'loop',
    perMove: 1,
    autoplay: true,
    pauseOnHover: true,
    interval: 3000,
    perPage: 1, 
    mediaQuery: 'min',
    breakpoints: {
      768: { 
        perPage: 4, 
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
      <Button className={GalleryData.button.className} text={GalleryData.button.text} link={GalleryData.button.link} />
    </div>
    </div>
  );
};

export default Gallery;