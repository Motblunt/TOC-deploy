import React from 'react';

const HomePagebranding = () => {
    return (
        <div>
            <div className='hidden md:block border-dotted border-t-3 border-rose-style w-2/3 mx-auto mt-24' style={{ opacity: 0.15 }}></div>
            <div className='grid grid-col-1 md:grid-cols-3 gap-20 mt-12 text-gray-400 text-center mt-22 md:-mt-8'>
                <div>
                    <div className='mx-auto w-16 h-16 font-bold bg-rose-style text-2xl rounded-full text-white flex items-center justify-center'><svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 512 512"><path fill="currentColor" d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM288 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM256 416c35.3 0 64-28.7 64-64c0-17.4-6.9-33.1-18.1-44.6L366 161.7c5.3-12.1-.2-26.3-12.3-31.6s-26.3 .2-31.6 12.3L257.9 288c-.6 0-1.3 0-1.9 0c-35.3 0-64 28.7-64 64s28.7 64 64 64zM176 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM96 288a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm352-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg></div>
                    <h2 className='uppercase tracking-tight leading-10 font-bold text-gray-400 text-lg md:text-xl my-3'>QUALITÉ</h2>
                    <p className='tracking-tight leading-6'>Surprenez vos utilisateurs en passant au niveau supérieur avec un projet web optimisé, rapide et optimal</p>
                </div>                
                <div>
                    <div className='mx-auto w-16 h-16 font-bold bg-rose-style text-2xl rounded-full text-white flex items-center justify-center'><svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 640 512"><path fill="currentColor" d="M64 96c0-35.3 28.7-64 64-64H512c35.3 0 64 28.7 64 64V352H512V96H128V352H64V96zM0 403.2C0 392.6 8.6 384 19.2 384H620.8c10.6 0 19.2 8.6 19.2 19.2c0 42.4-34.4 76.8-76.8 76.8H76.8C34.4 480 0 445.6 0 403.2zM281 209l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48-48c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM393 175l48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"/></svg></div>
                    <h2 className='uppercase tracking-tight leading-10 font-bold text-gray-400 text-lg md:text-xl my-3'>OBJECTIF</h2>
                    <p className='tracking-tight leading-6'>Imaginons ensemble, concevons & développons des projets web toujours plus innovant en vous proposant des solutions techniques et adaptées.</p>
                </div>                
                <div>
                    <div className='mx-auto w-16 h-16 font-bold bg-rose-style text-2xl rounded-full text-white flex items-center justify-center'><svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 640 512"><path fill="currentColor" d="M218.3 8.5c12.3-11.3 31.2-11.3 43.4 0l208 192c6.7 6.2 10.3 14.8 10.3 23.5H336c-19.1 0-36.3 8.4-48 21.7V208c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h64V416H112c-26.5 0-48-21.5-48-48V256H32c-13.2 0-25-8.1-29.8-20.3s-1.6-26.2 8.1-35.2l208-192zM352 304V448H544V304H352zm-48-16c0-17.7 14.3-32 32-32H560c17.7 0 32 14.3 32 32V448h32c8.8 0 16 7.2 16 16c0 26.5-21.5 48-48 48H544 352 304c-26.5 0-48-21.5-48-48c0-8.8 7.2-16 16-16h32V288z"/></svg></div>
                    <h2 className='uppercase tracking-tight leading-10 font-bold text-gray-400 text-lg md:text-xl my-3'>FULL REMOTE</h2>
                    <p className='tracking-tight leading-6'>Optez pour le mode de travail full remote, en apportant ma disponibilité et ma capacité à m'adapter à votre fuseau horaire, pour mener à bien votre projet avec succès."</p>
                </div>
                
            </div>

        </div>
    );
};

export default HomePagebranding;