function Footbar() {
  const contactmethods = [
    { method: "email", link: "mailto:yexin121101@gmail.com" },
    { method: "github", link: "https://github.com/hungryx" },
    { method: "linkedin", link: "https://www.linkedin.com/in/hungryexin/" },
  ];

  return (
    <div id="Footbar">
      {contactmethods.map((item) => (
        <div className="contacts">
          <a href={item.link} target="_blank">
            <img src={`/icons/${item.method}.svg`} alt={item.method} />
          </a>
        </div>
      ))}
    </div>
  );
}

export default Footbar;
