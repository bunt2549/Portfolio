import { HashRouter } from "react-router-dom";
import About from './components/About';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Works from './components/Works';
import ParticlesComponent from './components/ParticlesComponent';


const App = () => {
  return (    <HashRouter>
      <div className="relative z-0 bg-primary">
        <Navbar />
        <Hero />
        <About />
        <Works />
        <Contact />      </div>
    </HashRouter>
  )
}

export default App
