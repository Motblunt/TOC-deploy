import React, { useState, useEffect } from 'react';
import '../Carousel3/Carousel3.css'
import Booki1 from '../Img/Booki/Booki1.png'
import Booki2 from '../Img/Booki/Booki2.png'
import Booki3 from '../Img/Booki/Booki3.png'

const Carousel3 = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        Booki1,
        Booki2,
        Booki3,        
    ];
  
    const goToNextSlide = () => {
      setCurrentIndex((currentIndex + 1) % images.length);
    };
  
    const goToPrevSlide = () => {
      setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };
  
    return (
      <div className="carousel-3">
        <h1>Projet OpenClassrooms : Booki, agence de voyage</h1>
        <div className="slides">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              className={index === currentIndex ? 'slide active' : 'slide'}
            />
          ))}
        </div>
        <div className="counter">{currentIndex + 1} / {images.length}</div>
        <button className="prev-btn-3" onClick={goToPrevSlide}><i class="fa-solid fa-angle-left"></i></button>
        <button className="next-btn-3" onClick={goToNextSlide}><i class="fa-solid fa-angle-right"></i></button>
      </div>
    );
  };
  
  export default Carousel3;