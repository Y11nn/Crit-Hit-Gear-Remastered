import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import '../src/assets/styles/App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MainPage from './pages/MainPage';
import ArmorPage from '../src/pages/ArmorPage';
import WeaponsPage from '../src/pages/WeaponsPage';
import AccessoriesPage from '../src/pages/AccessoriesPage';
import ConsumablesPage from '../src/pages/ConsumablesPage';
import TrinketsPage from '../src/pages/TrinketsPage';
import MountsPage from '../src/pages/MountsPage';
import PetsPage from '../src/pages/PetsPage';
import LogInPage from '../src/pages/LogInPage';
import SignUpPage from '../src/pages/SignUpPage';
import AboutPage from '../src/pages/AboutPage';
import ContactPage from '../src/pages/ContactPage';

function App() {
  return (
    <div style={{display: 'flex', flexDirection: 'column',justifyContent: 'space-between', alignItems: 'center', height:'100vh'}}> 
    <BrowserRouter>
    <Navbar/>
    </BrowserRouter>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/ArmorPage" element={<ArmorPage/>} />
          <Route path="/WeaponsPage" element={<WeaponsPage/>} />
          <Route path="/AccessoriesPage" element={<AccessoriesPage/>} />
          <Route path="/ConsumablesPage" element={<ConsumablesPage/>} />
          <Route path="/TrinketsPage" element={<TrinketsPage/>} />
          <Route path="/MountsPage" element={<MountsPage/>} />
          <Route path="/PetsPage" element={<PetsPage/>} />
          <Route path="/LogInPage" element={<LogInPage/>} />
          <Route path="/SignUpPage" element={<SignUpPage/>} />
          <Route path="/AboutPage" element={<AboutPage/>} />
          <Route path="/ContactPage" element={<ContactPage/>} />
        </Routes>
      </Router>
    <Footer/>
  </div>
  
  );
}

export default App;
