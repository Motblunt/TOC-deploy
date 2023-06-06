import React from 'react';
import Arbre from '../Arbre/Arbre';
import './Competences.css'
import OutlinedCard from '../QualityCard/QualityCard';

const Competences = () => {
    return (
        <div className='flex'>
            <h1>Arbre de compétences</h1>
            <p>Voyons plus en détail mon background de développeur FullStack</p>
            <Arbre/>
            <OutlinedCard/>            
        </div>
    );
};

export default Competences;