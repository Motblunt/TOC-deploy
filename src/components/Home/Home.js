import React from 'react';
import Banner from '../Banner/Banner';
import Quote from '../Quote/Quote';
import Carousel1 from '../Portfolio/Carousel1/Carousel1';
import HomePagebranding from '../HomePagebranding/HomePagebranding';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Quote/>        
            <HomePagebranding/>     
        </div>
    );
};

export default Home;