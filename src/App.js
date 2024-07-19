import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './NavBar/Navbar';
import Home from './Home/Home';
import Services from './Services/Services';
import Industries from './Industries/Industries';
import HireUs from './HireUs/HireUs';
import HappyClient from './HappyClient/HappyClient';
import Footer from './Footer/Footer';
import ProjectJourney from './ProjectJourney/ProjectJourney';
import Technology from './Technology/Technology';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar></Navbar>
        
        <div className='homeBg'><Home /></div>
        <div id="services"><Services /></div>
        <div id=""><Industries /></div>
        <div id="hireus"><HireUs /></div>
        <div id=""><HappyClient /></div>
        <div id=""><ProjectJourney /></div>
        <div id=""><Technology /></div>
        <div id=""><Footer /></div>
      </BrowserRouter>
    </div>
  );
}

export default App;
