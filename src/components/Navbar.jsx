import { useState, useEffect } from "react";

function Navbar() {
  const sections = ["About", "Experience", "TechStack", "Works"];
  return (
    <nav>
      {sections.map((section) => (
        <a href={`#${section}`}> {section}</a>
      ))}
    </nav>
  );
}

export default Navbar;
