import React from 'react';
import LogoT from '../../Asset/Logo_TC-removebg-preview.png'
import BannerImg from '../Banner/programming.webp'

const Banner = () => {
  return (
    <div className='max-w-full bg-center md:bg-top bg-no-repeat md:h-full' style={{backgroundImage:`url(${BannerImg})`}}>
      <main className='pt-0 md:pt-40 pb-5 gradient-banner-home mx-auto w-full'>
        <div className='flex items-center h-screen-r md:h-auto max-w-full'>
          <div className='mx-auto -mt-10 md:mt-0'>
            <img className='w-36 md:w-96 mx-auto' src={LogoT} alt="Théo Cottin, développeur web full stack freelance" />
            <div className='text-center pt-10 pb-10 md:pb-32'>
              <h2 className='uppercase mb-2 text-2xl md:text-4xl leading-10 font-extrabold text-gray-300'>Théo Cottin</h2>
              <h1 className='text-lg md:text-1xl font-bold tracking-widest leading-none bg-clip-text text-transparent bg-gradient-to-r from-pink-300 via-pink-400 to-pink-600'>Développeur Full-Stack Freelance</h1>
            </div>
          </div>
        </div>
      </main>
    </div>

  );
};

export default Banner;