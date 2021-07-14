import { lazy, Suspense } from 'react';
import './App.css';


import Loading from './Component/Loading/Loading';
import {  HashRouter } from 'react-router-dom';



// import Cover from './Component/Cover/Cover';
const Cover = lazy(()=> import('./Component/Cover/Cover'))

// import Navigation from './Component/Navigation/Navigation';
const Navigation = lazy(()=> import('./Component/Navigation/Navigation'))

// import AboutSection from './Component/About/AboutSection';
const AboutSection = lazy(()=> import('./Component/About/AboutSection'))

// import MySkills from './Component/MySkills/MySkills';
const MySkills = lazy(()=> import('./Component/MySkills/MySkills'))

// import Projects from './Component/Projects/Projects';
const Projects = lazy(()=> import('./Component/Projects/Projects'))

// import ClientsComment from './Component/ClientsComment/ClientsComment';
const ClientsComment = lazy(()=> import('./Component/ClientsComment/ClientsComment'))

// import Services from './Component/Services/Services'
const Services = lazy(()=> import('./Component/Services/Services'))

// import Contact from './Component/Contact/Contact'
const Contact = lazy(()=> import('./Component/Contact/Contact'))

// import Map from "./Component/Map/Map"
const Map = lazy(()=> import("./Component/Map/Map"))

// import Footer from './Component/Footer/Footer';
const Footer = lazy(()=> import('./Component/Footer/Footer'))






function App() {
  return (
    <Suspense fallback={ <Loading />  }>
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

    </Suspense>
  );
}

export default App;
