import React, { useState, useEffect } from 'react';
import '../Carousel4/Carousel4.css'
import Kasa1 from '../Img/Kasa/Kasa1.png'
import Kasa2 from '../Img/Kasa/Kasa2.png'
import Kasa3 from '../Img/Kasa/Kasa3.png'
import Kasa4 from '../Img/Kasa/Kasa4.png'

const Carousel4 = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        Kasa1,
        Kasa2,
        Kasa3,
        Kasa4,        
    ];
  
    const goToNextSlide = () => {
      setCurrentIndex((currentIndex + 1) % images.length);
    };
  
    const goToPrevSlide = () => {
      setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };
  
    return (    
         <div className="carousel-2">
          <h1>Projet OpenClassrooms : Kasa, agence de location immobilière</h1>
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
        <button className="prev-btn-2" onClick={goToPrevSlide}><i class="black fa-solid fa-angle-left "></i></button>
        <button className="next-btn-2" onClick={goToNextSlide}><i class="black fa-solid fa-angle-right "></i></button>
      </div>    
    );
  };
  
  export default Carousel4;