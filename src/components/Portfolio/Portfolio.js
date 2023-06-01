import React from 'react';
import './Portfolio.css'
import Carousel1 from './Carousel1/Carousel1';
import Carousel2 from './Carousel2/Carousel2';


const Portfolio = () => {
    return (
        <div>
            <div className='carousel1'>
                <Carousel1 />
            </div>
            <div className='carousel2'>
                <Carousel2 />
            </div>
        </div>
    );
};

export default Portfolio;