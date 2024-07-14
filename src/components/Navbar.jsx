function Navbar() {
  const sections = ["About", "Experience", "Projects"];
  return (
    <nav>
      {sections.map((section) => (
        <a href={`#${section}`}> {section}</a>
      ))}
    </nav>
  );
}

export default Navbar;
