import React from 'react';
import './QuoteComp.css'

const QuoteComp = () => {
    return (
        <div>
            <div className="blockquote-wrapper">
                <div className="blockquote">
                    <h1>
                        "  Un développeur freelance est comme un <span className='colorfull'>artisan du code</span> : il sculpte des solutions sur mesure, jongle avec les technologies et transforme les idées en <span className='colorfull'>réalité numérique. "</span>
                    </h1>
                    <h4>- ChatGPT<br/><em>Grand Artiste du XXI siècle.</em></h4>
                </div>
            </div>

            <h2 className='font-h2'>Zoom sur mes qualités de développeur full-stack</h2>
        </div>
    );
};

export default QuoteComp;