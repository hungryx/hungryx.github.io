function Navbar() {
  const sections = ["About", "Experience", "Projects"];
  return (
    <nav>
      {sections.map((section) => (
        // <a href={`#${section}`}> {section}</a>
        <button
          onClick={() => {
            var target = document.getElementById(section);
            console.log(target);
            target.scrollIntoView();
          }}
        >
          {section}
        </button>
      ))}
    </nav>
  );
}

export default Navbar;
