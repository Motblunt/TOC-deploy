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
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Router>
        <div className='display-flex-evenly'>
          <div className='logo'>
              <a to='/'><img src={LogoTO} alt="" style={{ textDecoration: 'none' }} /></a>
            </div>
          <nav className=''>            
          <ul className='display-flex'>
            
            <li>
              <NavLink className="nav-style" to='/'><i class="fa-solid fa-house"></i></NavLink>
            </li>
            <li>
              <NavLink className="nav-style" to="/services" activeClassName="active">Services</NavLink>
            </li>
            <li>
              <NavLink className="nav-style"  to="/portfolio" activeClassName="active">Portfolio</NavLink>
            </li>
            <li>
              <NavLink className="nav-style" to="/competences" activeClassName="active">Compétences</NavLink>
            </li>
            <li>
              <NavLink className="nav-style" to="/avis" activeClassName="active">Avis</NavLink>
            </li>
            <li>
              <NavLink className="nav-style" to="/contact" activeClassName="active">Contact</NavLink>
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
      <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
