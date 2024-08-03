import React from "react";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div className="about-me">
      <h2>About me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor
        sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet,
        consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur
        adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing
        elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum
        dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet,
        consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur
        adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing
        elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum
        dolor sit amet, consectetur adipiscing elit
      </p>
      <a href="/resume.pdf" download="my_cv.pdf">
        <button className="resume-button">Download Resume</button>
      </a>
    </div>
  );
};

export default AboutMe;
