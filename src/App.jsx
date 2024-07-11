import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Navbar />} />
//         {/* <Hero />
//         <About />
//         <Experience />
//         <TechStack />
//         <Projects /> */}
//       </Routes>
//     </BrowserRouter>
//   );
// }

function App() {
  return (
    <div>
      <Navbar />
      <div className="content">
        <About />
        <Experience />
        <Projects />
        {/* <TechStack /> */}
      </div>
    </div>
  );
}

export default App;
