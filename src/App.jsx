import Home from './home';      
import About from './about';    
import Skills from './skills';  
import Projects from './projects';
import Contact from './contact';   
import './App.css';

export default function App() {
  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="nav-brand">Sondus Al Samad</div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
      
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}