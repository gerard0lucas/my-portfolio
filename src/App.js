import Navbar from "./components/Navbar";
import Home from "./components/home";
import About from "./components/About"
import Contact from "./components/contact";
import Projects from "./components/projects";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
