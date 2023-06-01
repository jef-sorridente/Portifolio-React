// CSS
import "./App.css";

// Components
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import NavbarLeft from "./components/NavbarLeft/NavbarLeft";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <>
      <Navbar />
      <NavbarLeft />
      <Main />
      <Projects />
      <About />
      <Footer />
    </>
  );
}

export default App;
