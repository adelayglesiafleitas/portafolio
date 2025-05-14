import './styles/App.css';
import { LanguageProvider } from './context/LanguageContext'; // Importa el LanguageProvider
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from "./components/Skills";
import Portafolio from "./components/Portafolio.tsx";

const App = () => {
  return (
    <LanguageProvider> {/* Envolvemos la app con LanguageProvider */}
      <div className="App">
        <header>
          <Navbar />
        </header>
        <main> <section id="home">
          <Hero />
        </section>
          <section id="about">
            <About />
            <section id="skills">
              <Skills />
            </section>
          </section>
        </main>
      </div>
    </LanguageProvider>
  );
};

export default App;
