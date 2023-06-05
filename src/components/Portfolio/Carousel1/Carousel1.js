import React, { useState, useEffect } from 'react';
import './Carousel1.css'
import Nina1 from '../Img/ProjetNina/Nina1.png'
import Nina2 from '../Img/ProjetNina/Nina2.png'
import Nina3 from '../Img/ProjetNina/Nina3.png'
import Nina4 from '../Img/ProjetNina/Nina4.png'


const Carousel1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    Nina1,
    Nina2,
    Nina3,
    Nina4
  ];

  const goToNextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel">
      <h1>Projet OpenClassrooms : Nina Carducci, photographe</h1>
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
      <button className="prev-btn" onClick={goToPrevSlide}><i class="fa-solid fa-angle-left"></i></button>
      <button className="next-btn" onClick={goToNextSlide}><i class="fa-solid fa-angle-right"></i></button>
    </div>
  );
};

export default Carousel1;