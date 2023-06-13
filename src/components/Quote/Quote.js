import React from 'react';
import '../../CSS/Quote.css'

const Quote = () => {
    return (
        <div className='text-center -mt-20 md:mt-10'>
            <h2 className='uppercase font-bold tracking-tight leading-none text-gray-300 mb-3'>
                <span className='relative text-4xl block mb-5'>
                    <span className='w-full h-0.5 absolute z-0 top-1/2 left-0'>
                        <span className='bg-rose-style bg-opacity-30 w-10/12 md:w-1/2 h-0.5 block mx-auto'></span>
                    </span>
                    <span className='relative px-4 z-10 bg-grey-style'>ENSEMBLE</span>
                </span>
                <span className='text-3xl md:text-8xl block'>CRÉONS</span>
                <span className='text-xl md:text-4xl block'>VOTRE AVENIR EN LIGNE</span>
            </h2>

        </div>
    );
};

export default Quote;