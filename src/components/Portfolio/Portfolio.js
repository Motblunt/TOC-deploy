import React from 'react';
import './Portfolio.css'
import Carousel1 from './Carousel1/Carousel1';
import Carousel2 from './Carousel2/Carousel2';
import Logo1 from './Img/Logo/audit lighthouse.svg'
import Logo2 from './Img/Logo/chrome-devtools.svg'
import Logo3 from './Img/Logo/LogoWave3.png'

const Portfolio = () => {
    return (
        <div>
            <div className='carousel1'>
                <Carousel1 />
                <div className='text-c1'>
                    <h2>Débug et optimisation d'un site web :</h2>
                    <p className='font-p'>Ce projet m'a permis d'approfondir mes compétences en matière d'optimisation des performances, de SEO, de débogage et de rédaction de rapports d'intervention. J'ai également eu l'occasion d'utiliser des outils de développement pour effectuer des audits et mesurer les résultats de mes actions d'optimisation. Ces compétences sont précieuses pour continuer à offrir des services de qualité en tant que développeur freelance.</p>
                    <br />
                    <p className='used-tools'>Outils utilisés : <span><img src={Logo1} alt="Logo Google Lighthouse" /> <img src={Logo2} alt="Logo Google ChromeDevtools" /> <img src={Logo3} alt="Logo Wave Tools" /></span></p>
                    <div class="line"></div>
                </div>

            </div>
            <div className='carousel2'>
                <Carousel2 />
            </div>
        </div>
    );
};

export default Portfolio;