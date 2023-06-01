import React, { useState, useEffect } from 'react';
import './Carousel2.css'
import Sophie1 from '../Img/SophieBluel/Sophie1.png'
import Sophie2 from '../Img/SophieBluel/Sophie2.png'
import Sophie3 from '../Img/SophieBluel/Sophie3.png'
import Sophie4 from '../Img/SophieBluel/Sophie4.png'
import Sophie5 from '../Img/SophieBluel/Sophie5.png'


const Carousel2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    Sophie1,
    Sophie2,
    Sophie3,
    Sophie4,
    Sophie5
  ];

  const goToNextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (    
       <div className="carousel-2">
        <h1>Projet OpenClassrooms : Sophie Bluel : Architecte d'intérieur.</h1>
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
      <button className="prev-btn" onClick={goToPrevSlide}><i class="fa-solid fa-arrow-left fa-sm"></i></button>
      <button className="next-btn" onClick={goToNextSlide}><i class="fa-solid fa-arrow-right fa-sm"></i></button>
    </div>    
  );
};

export default Carousel2;