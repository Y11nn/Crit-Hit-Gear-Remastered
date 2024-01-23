import '../src/assets/styles/App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MainPage from './pages/MainPage';

function App() {
  return (
    <div style={{display: 'flex', flexDirection: 'column',justifyContent: 'space-between', alignItems: 'center', height:'100vh'}}> 
    <Navbar/>
      <MainPage/>
    <Footer/>
  </div>
  );
}

export default App;
