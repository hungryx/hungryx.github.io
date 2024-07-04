import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";
import TechStack from "./components/TechStack";
import Works from "./components/Works";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Navbar />} />
//         {/* <Hero />
//         <About />
//         <Experience />
//         <TechStack />
//         <Works /> */}
//       </Routes>
//     </BrowserRouter>
//   );
// }

function App() {
  return (
    <div>
      <Navbar />

      <About />
      <Experience />
      <TechStack />
      <Works />
    </div>
  );
}

export default App;
