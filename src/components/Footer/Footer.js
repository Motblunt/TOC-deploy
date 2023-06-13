import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../CSS/Footer.css';

const Footer = () => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <div className='footer-container'>           
            <div className="branding">                 
                <h3>TOC S.A.S.U</h3>
                <p>Théo Cottin</p>
                <p>Développeur Web FullStack Freelance</p>
                <p>31 Rue Borde Neuve</p>
                <p>31180 Castelmaurou</p>
                <p>France</p>
                <p>port. : +33 6 52 25 13 95</p>
            </div>            
            <div className="societe">
                <h3>Société</h3>
                <ul>
                    <li ><a className='bg-fade' href="">Tarif</a></li>
                    <li ><a className='bg-fade' href="">FAQ</a></li>
                    <a className='bg-fade' onClick={() => handleNavigation('/contact')}>
                        Contact
                    </a>
                </ul>
            </div>
            <div className="navigation">
                <h3>Navigation</h3>
                <ul>
                    <li>
                        <a className='bg-fade' onClick={() => handleNavigation('/')}>
                            Accueil
                        </a>
                    </li>
                    <li>
                        <a className='bg-fade' onClick={() => handleNavigation('/services')}>
                            Services
                        </a>
                    </li>
                    <li>
                        <a className='bg-fade' onClick={() => handleNavigation('/portfolio')}>
                            Portfolio
                        </a>
                    </li>
                    <li>
                        <a className='bg-fade' onClick={() => handleNavigation('/competences')}>
                            Compétences
                        </a>
                    </li>
                </ul>
            </div>
            <div className="reseau">
                <h3>Réseaux</h3>
                <ul>
                    <li>
                        <a className='bg-fade' href="https://www.linkedin.com/in/th%C3%A9o-cottin-713468144/">Linkedin</a>
                    </li>
                    <li>
                        <a className='bg-fade' href="https://github.com/Motblunt">Github</a>
                    </li>
                    <li>
                        <a className='bg-fade' href="https://www.malt.fr/profile/theocottin">Malt</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;
