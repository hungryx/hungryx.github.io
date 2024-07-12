function Projects() {
  const projects = [
    {
      name: "Seaye",
      image: "seaye.png",
      description: "Marine Equipment and Construction Company Website",
      stack: ["React", "Javascript", "CSS", "Cloudflare"],
      link: "https://seayegroup.com/",
      writeup:
        "I took charge of designing, developing, and hosting a static website for Seaye Pte. Ltd., a supplier of construction materials for the marine industry. The static website was developed with React for maintainability and a dynamic user experience. It features a bilingual interface with a language toggle function between English and Chinese. The site is fully responsive and provides a consistent user experience across different devices. Deployment of the site was accomplished with Cloudflare Pages.",
    },
    {
      name: "ThinkTune",
      image: "thinktune.png",
      description: "Speech Recognition Game for Memory Training",
      stack: ["React", "Javascript", "CSS", "ThreeJS", "NodeJS", "MongoDB"],
      link: "https://www.youtube.com/watch?v=7-5NSuzGqw8&ab_channel=NTUCollegeofComputingandDataScience%28CCDS%29",
      writeup: "ThinkTune is an auditory game web application, ",
    },
    {
      name: "BookLens",
      image: "booklens.png",
      description: "Information Retrieval",
      stack: ["React", "Javascript", "CSS", "Solr"],
      link: "https://www.youtube.com/watch?v=ZWMEyxRC2sg&ab_channel=AarushiNema",
      writeup: "writeup section",
    },
  ];
  return (
    <div className="section" id="Projects">
      <h1>Projects</h1>
      <div id="projects-content">
        {projects.map((card) => (
          <div className="projects-card">
            {/* <a href={card.link} target="_blank" className="projects-link">
              Visit
            </a> */}

            <h2>{card.name}</h2>
            <h3>{card.description}</h3>

            <div className="projects-info">
              <a
                href={card.link}
                target="_blank"
                className="projects-imagelink"
              >
                <img
                  src={`./src/assets/${card.image}`}
                  alt={card.image}
                  className="projects-image"
                />
              </a>

              <div className="projects-desc">
                {/* <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Explicabo eaque tenetur fugit ratione dicta neque officia,
                  commodi, asperiores, sequi iste incidunt ab laboriosam
                  voluptatem rem inventore atque facere? Ab, ipsa?
                </p> */}
                <p>{card.writeup}</p>

                <div className="stack">
                  {card.stack.map((item) => (
                    <div className="stack-item">
                      <img src={`./src/assets/logo/${item}.svg`} alt={item} />
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
