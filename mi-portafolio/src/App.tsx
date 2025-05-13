import './styles/App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from "./components/Skills";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
        <section id="skills">
          <Skills />
        </section>
      </section>
    </div>
  );
};

export default App;
