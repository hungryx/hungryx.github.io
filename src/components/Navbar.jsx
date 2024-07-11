import { useState, useEffect } from "react";

function Navbar() {
  const sections = ["About Me", "Experience", "Projects"];
  return (
    <nav>
      {sections.map((section) => (
        <a href={`#${section}`}> {section}</a>
      ))}
    </nav>
  );
}

export default Navbar;
