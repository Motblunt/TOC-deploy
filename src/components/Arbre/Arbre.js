import React from 'react';
import './Arbre.css'
import LogoHTML from './LogoHTML5-144.svg'
import LogoCss3 from './icons8-css3-144.svg'

const Arbre = () => {
    return (
        <div>
            <div className='main-wrapper'>
                <div className='integration'>
                    <h2>Intégration Web</h2>
                    <div className='flex-content'>
                        <div className='integration-content'>
                            <div className='HTML5 sized-logo'><a href="https://fr.wikipedia.org/wiki/HTML5"><img src={LogoHTML} alt="Logo HTML5" /></a></div>
                            <h3>HTML5</h3>
                        </div>
                        <div className='integration-content'>
                            <div className='CSS3 sized-logo'><a href="https://fr.wikipedia.org/wiki/Feuilles_de_style_en_cascade#:~:text=CSS3%20devient%20%C2%AB%20modulaire%20%C2%BB%2C%20afin,des%20sous%2Densembles%20de%20CSS3."><img src={LogoCss3} alt="Logo CSS3" /></a></div>
                            <h3>CSS3</h3>
                        </div>

                    </div>
                </div>
                <div className='dividing'></div>
                <div className='conception'>
                    <h2>Conception Web</h2>
                    <div className='flex-content'>
                        <div className='integration-content'>
                            <div className='HTML5 sized-logo' ><a href="https://fr.wikipedia.org/wiki/HTML5"><img src={LogoHTML} alt="Logo HTML5" /></a></div>
                            <h3>HTML5</h3>
                        </div>
                        <div className='integration-content'>
                            <div className='CSS3 sized-logo'><a href="https://fr.wikipedia.org/wiki/Feuilles_de_style_en_cascade#:~:text=CSS3%20devient%20%C2%AB%20modulaire%20%C2%BB%2C%20afin,des%20sous%2Densembles%20de%20CSS3."><img src={LogoCss3} alt="Logo CSS3" /></a></div>
                            <h3>CSS3</h3>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    );
};

export default Arbre;