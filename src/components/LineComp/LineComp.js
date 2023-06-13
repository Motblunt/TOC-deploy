import React from 'react';
import LogoReact from '../../Asset/LogoReact.svg'
import LogoAngular from '../../Asset/angular-icon.svg'
import LogoVueJS from '../../Asset/icons8-vue-js.svg'
import LogoTailwind from '../../Asset/tailwindcss-icon.svg'
import LogoNode from '../../Asset/LogoNodejs.svg'

const LineComp = () => {
    return (
        <div className='mt-20'>
            <div className='border-t border-b border-rose-style border-opacity-5 py-5 mt-5 flex items-center justify-around'>
               <a href="https://fr.legacy.reactjs.org/" className='hover-animation'>
            <div className='flex flex-col items-center'>
                <img className='h-7 md:h-10' src={LogoReact} alt="Logo React" />
                <span className='block text-gray-100 uppercase font-bold text-xs md:text-base'>react</span>
            </div>
           </a>
           <a href="https://nodejs.org/en/about" className='hover-animation'>
            <div className='flex flex-col items-center test-test'>
                <img className='h-7 md:h-10' src={LogoNode} alt="Logo Node.js" />
                <span className='block text-gray-100 uppercase font-bold text-xs md:text-base'>node.js</span>
            </div>
           </a><a className='hover-animation' href="https://tailwindcss.com/">
            <div className='flex flex-col items-center'>
                <img className='h-7 md:h-10' src={LogoTailwind} alt="Logo Tailwindcss" />
                <span className='block text-gray-100 uppercase font-bold text-xs md:text-base'>tailwind</span>
            </div>
           </a><a className='hover-animation' href="https://vuejs.org/">
            <div className='flex flex-col items-center'>
                <img className='h-7 md:h-10' src={LogoVueJS} alt="Logo Vue.js" />
                <span className='block text-gray-100 uppercase font-bold text-xs md:text-base'>vue.js</span>
            </div>
           </a><a className='hover-animation' href="https://angular.io/">
            <div className='flex flex-col items-center'>
                <img className='h-7 md:h-10' src={LogoAngular} alt="Logo Angular" />
                <span className='block text-gray-100 uppercase font-bold text-xs md:text-base'>angular</span>
            </div>
           </a> 
            </div>
           
        </div>
        
      )
};

export default LineComp;