import React from 'react';
import Arbre from '../Arbre/Arbre';
import './Competences.css'
import OutlinedCard from '../QualityCard/Creativ/QualityCard';
import Organised from '../QualityCard/Organize/Organised';
import Curious from '../QualityCard/Curious/Curious';
import Enthousiamse from '../QualityCard/Enthousiasm/Enthousiasm';
import Precis from '../QualityCard/Precis/Precis';
import QuoteComp from '../QuoteComp/QuoteComp';

const Competences = () => {
    return (
        <div className='flex'>
            <h1>Arbre de compétences</h1>
            <p>Voyons plus en détail mon background de développeur FullStack</p>
            <Arbre/>
            <QuoteComp/>
            <div className='card-wrapper '>
            <OutlinedCard/>   
            <Organised/> 
            <Curious/>
            <Enthousiamse/>
            <Precis/>
            </div>
                    
        </div>
    );
};

export default Competences;