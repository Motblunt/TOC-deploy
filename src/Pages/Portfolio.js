import React from 'react';
import '../components/Portfolio/Portfolio.css'
import Carousel1 from '../components/Portfolio/Carousel1/Carousel1';
import Carousel2 from '../components/Portfolio/Carousel2/Carousel2';
import Carousel3 from '../components/Portfolio/Carousel3/Carousel3';
import Carousel4 from '../components/Portfolio/Carousel4/Carousel4';
import Logo1 from '../components/Portfolio/Img/Logo/audit lighthouse.svg'
import Logo2 from '../components/Portfolio/Img/Logo/chrome-devtools.svg'
import Logo3 from '../components/Portfolio/Img/Logo/LogoWave3.png'
import Logo4 from '../components/Portfolio/Img/Logo/logo-javascript.svg'
import Logo5 from '../components/Portfolio/Img/Logo/nodejs-ar21.svg'
import Logo6 from '../components/Portfolio/Img/Logo/npm.svg'
import Logo7 from '../components/Portfolio/Img/Logo/Logo-CSS3.svg'
import Logo8 from '../components/Portfolio/Img/Logo/Logo-HTML5.svg'
import Logo9 from '../components/Portfolio/Img/Logo/Logo-Github.svg'
import Logo10 from '../components/Portfolio/Img/Logo/javascript-1.svg'
import Logo11 from '../components/Portfolio/Img/Logo/react-2.svg'
import Logo12 from '../components/Portfolio/Img/Logo/sass-1.svg'

const Portfolio = () => {
    return (
        <div>
            <div className='carousel1'>
                <Carousel1 />
                <div className='text-c1'>
                    <h2>Débug et optimisation d'un site web</h2>
                    <p className='font-p'>Ce projet m'a permis d'approfondir mes compétences en matière d'optimisation des performances, de SEO, de débogage et de rédaction de rapports d'intervention. J'ai également eu l'occasion d'utiliser des outils de développement pour effectuer des audits et mesurer les résultats de mes actions d'optimisation. Ces compétences sont précieuses pour continuer à offrir des services de qualité en tant que développeur freelance.</p>
                    <br />
                    <p className='used-tools'>Outils utilisés : <span><img src={Logo1} alt="Logo Google Lighthouse" /> <img src={Logo2} alt="Logo Google ChromeDevtools" /> <img src={Logo3} alt="Logo Wave Tools" /></span></p>
                    <div class="line"></div>
                </div>

            </div>
            <div className='carousel2'>
                <Carousel2 />
                <div className='text-c2'>
                    <h2>Créez une page web dynamique avec JavaScript</h2>
                    <p className='font-p'>Dans ce projet, j'ai pu acquérir une compréhension plus approfondie du langage Javascript, en utilisant ses fonctionnalités pour manipuler le DOM, effectuer des requêtes HTTP, gérer les événement et mettre en place la logique de l'application. J'ai pu créer une page web interactive, tout en lui ajoutant des fonctionnalités dynamique et en manipulant des données provenant d'une API.</p>
                    <br />
                    <p className='used-tools-2'>Outils utilisés : <span><img src={Logo4} alt="Logo Javascript" /> <img src={Logo5} alt="Logo NodeJs" /> <img src={Logo6} alt="Logo NPM" /></span></p>
                    <div className="line-2"></div>
                </div>
            </div>
            <div className='carousel3'>
                <Carousel3 />
                <div className='text-c1'>
                    <h2>Créez la page d'accueil d'une agence de voyage</h2>
                    <p className='font-p3'>Ce projet m'a permis de renforcer mes compétences en HTML et CSS, en travaillant sur des concepts tels que la découpe de maquettes, le positionnement des éléments avec Flexbox, l'intégration de formulaires, la création de cartes, et la gestion de la mise en page responsive.</p>
                    <br />
                    <p className='used-tools'>Outils utilisés : <span><img src={Logo7} alt="Logo CSS3" /> <img src={Logo8} alt="Logo HTML5" /> <img src={Logo9} alt="Logo GitHub" /></span></p>
                    <div class="line"></div>
                </div>
            </div>
            <div className='carousel2'>
                <Carousel4 />
                <div className='text-c2'>
                    <h2>Créez une application web avec React</h2>
                    <p className='font-p'>Dans l'ensemble, ce projet m'a permis de renforcer mes compétences en développement d'applications web avec React, en gestion de projet, en résolution de problèmes et éventuellement en collaboration, ce qui m'a préparé à de futurs projets et opportunités dans le domaine du développement web.</p>
                    <br />
                    <p className='used-tools-2'>Outils utilisés : <span><img src={Logo10} alt="Logo Javascript" /> <img src={Logo11} alt="Logo React" /> <img src={Logo12} alt="Logo SASS" /></span></p>
                    <div className="line-2"></div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;