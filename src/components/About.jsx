import { useState, useEffect } from "react";

function About() {
  return (
    <div div className="section" id="About Me">
      <h1>About Me</h1>
      <div id="about-content">
        <img
          src="./src/assets/placeholder.jpg"
          alt="My Image"
          id="about-image"
        />
        <p id="about-description">
          Hi, my name is Ye Xin, a fresh graduate from Nanyang Technological
          University's Computer Science Programme.
          <br></br>
          <br></br>
          My passion lies in creating practical and interesting web development
          projects. I have worked on clean single-page corporate applications as
          well as interative game applications.
          <br></br>
          <br></br>I enjoy exploring new technologies and fresh concepts in the
          field of web development, such as 3D web design and incorporating
          machine learning.
        </p>
      </div>
    </div>
  );
}

export default About;
