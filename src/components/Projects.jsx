function Projects() {
  const projects = [
    {
      name: "Seaye",
      image: "seaye.png",
      description: "Marine Equipment and Construction Company Website",
      stack: ["React", "CSS", "Framer", "Cloudflare"],
      link: "https://seayegroup.com/",
      writeup:
        "Seaye Pte. Ltd. is a supplier of construction materials and equipment for the marine industry. I was responsible for designing, developing, and hosting a static website for the company, managing the project from start to finish. The static website was developed with React for maintainability and a dynamic user experience. It features a bilingual interface with a language toggle function between English and Chinese. The site is fully responsive and provides a consistent user experience across different devices. Deployment of the site was accomplished with Cloudflare Pages.",
    },
    {
      name: "ThinkTune",
      image: "thinktune.png",
      description: "Speech Recognition Game for Memory Training",
      stack: ["React", "CSS", "ThreeJS", "NodeJS", "MongoDB"],
      link: "https://www.youtube.com/watch?v=7-5NSuzGqw8&ab_channel=NTUCollegeofComputingandDataScience%28CCDS%29",
      writeup:
        "ThinkTune is an auditory-focused memory training web application built using the MERN stack which features a dynamic React frontend, a Node.js and Express.js backend, and a MongoDB database for efficient data storage and retrieval. I also integrated Three.js to include engaging 3D visual elements extracted using Blender, for a more engaging user experience. TensorFlow.js was used for real-time speech recognition and model fine-tuning on the frontend.",
    },
    {
      name: "BookLens",
      image: "booklens.png",
      description: "Sentiment Analysis",
      stack: ["React", "CSS", "Solr"],
      link: "https://www.youtube.com/watch?v=ZWMEyxRC2sg&ab_channel=AarushiNema",
      writeup:
        "Booklens is search engine for reviews and sentiment analysis of books. React was used to create the intuitive and dynamic interface that allows users to search for specific books and view sentiment analysis on reader reviews. The frontend features multifaceted search capabilities, enabling users to filter results by genre and publication date. Additionally, charts were included to visually represent the sentiment of each book. The system uses API calls to Solr for efficient filtering and querying, leveraging Solr's powerful indexing capabilities.",
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
                  src={`/displays/${card.image}`}
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
                      <img src={`/icons/${item}.svg`} alt={item} />
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
