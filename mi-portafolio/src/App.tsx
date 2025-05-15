import './styles/App.css';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from "./components/Skills";
import Portfolio from "./components/Portafolio"; // 💡 nuevo import

const App = () => {
  return (
    <LanguageProvider>
      <div className="App">    
        <Navbar />
        <main>
          <section id="home">
            <Hero />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="portfolio"> {/* 💡 nueva sección */}
            <Portfolio />
          </section>
        </main>
      </div>
    </LanguageProvider>
  );
};

export default App;
