import React from 'react';
import Arbre from '../components/Arbre/Arbre';
import '../CSS/Competences.css'
import OutlinedCard from '../components/QualityCard/Creativ/QualityCard';
import Organised from '../components/QualityCard/Organize/Organised';
import Curious from '../components/QualityCard/Curious/Curious';
import Enthousiamse from '../components/QualityCard/Enthousiasm/Enthousiasm';
import Precis from '../components/QualityCard/Precis/Precis';
import QuoteComp from '../components/QuoteComp/QuoteComp';

const Competences = () => {
    return (
        <div className='flex-try'>
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