import React from 'react';
import './HomePagebranding.css'

const HomePagebranding = () => {
    return (
        <div className='flex-align'>
            <div className='flex-center'>
            <i class="fa-solid fa-gauge-high fa-xl flex FA-Branding"></i>
            <h3>QUALITÉ</h3>
            <p>Surprenez vos utilisateurs en passant au niveau supérieur avec un projet web optimisé, rapide et optimal</p>
            </div>
            <div><h1 className='background'></h1></div>
            <div className='flex-center'>            
            <i class="fa-solid fa-laptop-code fa-xl flex FA-Branding"></i>
            <h3>OBJECTIF</h3>
            <p>Imaginons ensemble, concevons & développons des projets web toujours plus innovant en vous proposant des solutions techniques et adaptées.</p>
            </div>
            <div><h1></h1></div>
            <div className='flex-center'>
            <i class="fa-solid fa-house-laptop fa-xl flex FA-Branding"></i>
            <h3>FULL REMOTE</h3>
            <p>Optez pour le mode de travail full remote, en apportant ma disponibilité et ma capacité à m'adapter à votre fuseau horaire, pour mener à bien votre projet avec succès."</p>
            </div>
        </div>
    );
};

export default HomePagebranding;