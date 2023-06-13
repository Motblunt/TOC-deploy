import './App.css';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Services from './Pages/Services';
import Portfolio from './Pages/Portfolio';
import Competences from './Pages/Competences';
import Avis from './Pages/Avis';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import LogoTO from './Asset/TC Uniquement.png';
import CV from './Théo Cottin - CV.pdf';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Router>
        <div className='navbar'>
          <div className='logo'>
            <NavLink to='/'><img className='logo-size' src={LogoTO} alt="" style={{ textDecoration: 'none' }} /></NavLink>
          </div>
          <nav>
            <ul>
              <li>
                <NavLink className="nav-style" to='/'><i class="fa-solid fa-house"></i></NavLink>
              </li>
              <li>
                <NavLink className="nav-style" to="/services" activeClassName="active">Services</NavLink>
              </li>
              <li>
                <NavLink className="nav-style" to="/portfolio" activeClassName="active">Portfolio</NavLink>
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

        <div className="content">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/services' element={<Services />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/competences' element={<Competences />} />
            <Route path='/avis' element={<Avis />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
