import Header from "./components/Header";
import About from "./components/About";
import Certificate from "./components/Certificate";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./css/index.css";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Certificate />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      
    </div>
  );
}

export default App;
