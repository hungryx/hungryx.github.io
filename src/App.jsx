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
      <Landing />
      <div className="content">
        <About />
        <Experience />
        <Projects />
      </div>
      <Footbar />
    </div>
  );
}

export default App;
