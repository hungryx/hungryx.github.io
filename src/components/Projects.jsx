import { useState, useEffect } from "react";

function Projects() {
  const projects = [
    {
      name: "Seaye",
      image: "seaye.png",
      description: "Company Introduction Site",
      stack: ["React", "Javascript", "CSS"],
      link: "https://seayegroup.com/",
    },
    {
      name: "ThinkTune",
      image: "thinktune.png",
      description: "Speech Recognition Game",
      stack: ["React", "Javascript", "CSS", "NodeJS", "ThreeJS"],
      link: "https://www.youtube.com/watch?v=7-5NSuzGqw8&ab_channel=NTUCollegeofComputingandDataScience%28CCDS%29",
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
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Explicabo eaque tenetur fugit ratione dicta neque officia,
                  commodi, asperiores, sequi iste incidunt ab laboriosam
                  voluptatem rem inventore atque facere? Ab, ipsa?
                </p>

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
