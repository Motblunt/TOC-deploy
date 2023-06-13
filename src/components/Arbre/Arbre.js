import React from 'react';
import '../../CSS/Arbre.css'
import LogoHTML from '../../Asset/LogoHTML5-144.svg'
import LogoCss3 from '../../Asset/icons8-css3-144.svg'
import LogoPhotoshop from '../../Asset/icons8-photoshop.svg'
import LogoAI from '../../Asset/icons8-adobe-illustrator.svg'
import LogoJS from '../../Asset/LogoJS.svg'
import LogoReact from '../../Asset/LogoReact.svg'
import LogoVuejs from '../../Asset/icons8-vue-js.svg'
import LogoWordpress from '../../Asset/LogoWordpress.svg'
import LogoNodejs from '../../Asset/LogoNodejs.svg'
import LogoMongodb from '../../Asset/LogoMongodb.svg'


const Arbre = () => {
    return (
        <div>
            <div className='main-wrapper'>
                <div className='integration'>
                    <h2>Intégration Web</h2>
                    <div >
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
                </div>
                <div className='divinding-wrapper'>
                    <i class="fa-solid fa-circle fa-xs"></i>
                    <div className='dividing'></div>
                    <div className='border-wrapper'>
                        <div className='column-center pos-rel'>
                            <i class="fa-solid fa-circle fa-xs center"></i>
                            <div className='dividing-3'></div>
                            <h2>Front-End</h2>
                            <div className='sized-logo center'>
                                <div className='column-center'>
                                    <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript"><img src={LogoJS} alt="Logo JavaScript" /></a>
                                    <h3>JAVASCRIPT</h3>
                                </div>
                                <div className='column-center'>
                                    <a href="https://fr.legacy.reactjs.org/"><img src={LogoReact} alt="Logo React" /></a>
                                    <h3>REACT</h3>

                                </div>
                                <div className='column-center'>
                                    <a href="https://vuejs.org/"><img src={LogoVuejs} alt="Logo Vue.js" /></a>
                                    <h3>VUE.JS</h3>

                                </div>
                            </div>
                        </div>

                        <div className='dividing-2'></div>
                        <div className='column-center row-gap'>
                            <i class="fa-solid fa-circle fa-xs"></i>
                            <div className='dividing-4'></div>
                            <i class="fa-solid fa-circle fa-xs"></i>
                            <div className="dividing-5"></div>
                            <div className='column-center'>
                                <h2>Back-End</h2>
                                <div className='center'>
                                    <div className='sized-logo column-center'>
                                    <a href="https://nodejs.org/en"><img src={LogoNodejs} alt="Logo Node.js" /></a>
                                    <h3>NODE.JS</h3>
                                </div>
                                <div className='sized-logo column-center'>
                                    <a href="https://www.mongodb.com/"><img src={LogoMongodb} alt="Logo MongoDB" /></a>
                                    <h3>MONGODB</h3>
                                </div>
                                </div>                                
                            </div>
                        </div>
                        <div className='dividing-2'></div>
                        <div className='column-center pos-rel-right'>
                            <i class="fa-solid fa-circle fa-xs center"></i>
                            <div className='dividing-3'></div>
                            <h2>Gestion De Contenu</h2>
                            <div className='sized-logo center'>
                                <div className='column-center wordpress'>
                                    <a href="https://wordpress.com/fr/"><img src={LogoWordpress} alt="Logo Wordpress" /> </a>
                                    <h3>WORDPRESS</h3>
                                </div>
                            </div>
                        </div>


                    </div>


                </div>

                <div className='conception'>
                    <h2>Conception Web</h2>
                    <div className='flex-content'>
                        <div className='integration-content'>
                            <div className='HTML5 sized-logo' ><a href="https://www.adobe.com/fr/products/photoshop.html"><img src={LogoPhotoshop} alt="Logo Adobe Photoshop" /></a></div>
                            <h3>PHOTOSHOP</h3>
                        </div>
                        <div className='integration-content'>
                            <div className='CSS3 sized-logo'><a href="https://fr.wikipedia.org/wiki/Adobe_Illustrator"><img src={LogoAI} alt="Logo AI" /></a></div>
                            <h3>ILLUSTRATOR</h3>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    );
};

export default Arbre;