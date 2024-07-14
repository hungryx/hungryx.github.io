function About() {
  return (
    <div div className="section" id="About">
      <h1>About Me</h1>
      <div id="about-content">
        <img
          src="./src/assets/placeholder.jpg"
          alt="My Image"
          id="about-image"
        />
        <p className="about-description upper">
          Hi, my name is Ye Xin, a fresh graduate from Nanyang Technological
          University with a Bachelor of Engineering (Computer Science), with an
          elective focus in Artificial Intelligence as well as Data Science and
          Analytics.
        </p>
        <p className="about-description lower">
          My passion lies in creating practical and innovative projects. I enjoy
          exploring new technologies and concepts in web development, including
          3D web design and incorporating machine learning.
        </p>
      </div>
    </div>
  );
}

export default About;
