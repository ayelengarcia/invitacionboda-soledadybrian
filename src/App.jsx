  import Header from "./components/Header";
  import About from "./components/About";
  import Certificate from "./components/Certificate";
  import Skills from "./components/Skills";
  import Projects from "./components/Projects";
  import Contact from "./components/Contact";
  import Footer from "./components/Footer";
  import { Animations } from "./Keyframes.styled";
  import { StyledApp } from "./App.styled";
  import Themes from "./Themes";
  import { ThemeProvider } from "styled-components";
  import { useState } from "react";

  function App() {

    const [theme, setTheme] = useState("light");

    return (
      <ThemeProvider theme={Themes[theme]}>
        <StyledApp>
          <Header theme={theme}  setTheme={setTheme} />
          <About />
          <Certificate />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
          <Animations />
        </StyledApp>
      </ThemeProvider>
    );
  }

  export default App;
