import "./App.css";

import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footbar from "./components/Footbar";

function App() {
  return (
    <div>
      <Navbar />
      <div className="content">
        <Landing />
        <About />
        <Experience />
        <Projects />
      </div>
      <Footbar />
    </div>
  );
}

export default App;
