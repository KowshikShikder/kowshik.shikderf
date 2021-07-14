import './App.css';

import Cover from './Component/Cover/Cover';
import Navigation from './Component/Navigation/Navigation';
import AboutSection from './Component/About/AboutSection';
import MySkills from './Component/MySkills/MySkills';
import Projects from './Component/Projects/Projects';
import ClientsComment from './Component/ClientsComment/ClientsComment';
import Services from './Component/Services/Services'
import Contact from './Component/Contact/Contact'
import Map from "./Component/Map/Map"
import Footer from './Component/Footer/Footer';
import {  HashRouter } from 'react-router-dom';





function App() {
  return (
    <div className="App"> 
    
      <Cover />
      
      <HashRouter>
        <Navigation />
      </HashRouter>

      <AboutSection/>
      <MySkills />
      <Projects/>
      <ClientsComment />
      <Services/>
      <Contact/>
      <Map/>
      <Footer/>

    </div>
  );
}

export default App;
