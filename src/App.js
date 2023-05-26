import './App.css';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Services from './components/Services/Services'
import Portfolio from './components/Portfolio/Portfolio'
import Competences from './components/Competences/Competences'
import Avis from './components/Avis/Avis'
import Contact from './components/Contact/Contact'
import Home from './components/Home/Home'
import LogoTO from './components/Banner/TC Uniquement.png'
import CV from './Théo Cottin - CV.pdf'

function App() {
  return (
    <div>
      <Router>
        <div className='display-flex-evenly'>
          <nav className=''>
          <ul className='display-flex'>
            <div className='logo'>
              <NavLink to='/'><img src={LogoTO} alt="" style={{ textDecoration: 'none' }} /></NavLink>
            </div>
            <li>
              <NavLink to='/'><i class="fa-solid fa-house-chimney fa-xs"></i></NavLink>
            </li>
            <li>
              <NavLink to="/services" activeClassName="active">Services</NavLink>
            </li>
            <li>
              <NavLink to="/portfolio" activeClassName="active">Portfolio</NavLink>
            </li>
            <li>
              <NavLink to="/competences" activeClassName="active">Compétences</NavLink>
            </li>
            <li>
              <NavLink to="/avis" activeClassName="active">Avis</NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeClassName="active">Contact</NavLink>
            </li>
          </ul>
          
        </nav>
        <div className="lien">
            <a href={CV} download={"CV - Cottin Théo"}>
              <i class="fa-solid fa-download"></i>        CV
            </a>
          </div>
        </div>
        

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/competences' element={<Competences />} />
          <Route path='/avis' element={<Avis />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
