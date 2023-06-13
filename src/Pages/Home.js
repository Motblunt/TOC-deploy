import React from 'react';
import Banner from '../components/Banner/Banner';
import Quote from '../components/Quote/Quote';
import HomePagebranding from '../components/HomePagebranding/HomePagebranding';
import LineComp from '../components/LineComp/LineComp';

const Home = () => {
    return (
        <div >
            <Banner/>
            <div className='max-w-6xl mx-auto px-4 sm:px-6 '>
            <Quote/>                 
            <HomePagebranding/> 
            <LineComp/> 
            </div>
                
        </div>
    );
};

export default Home;