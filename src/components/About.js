import React from "react";
import { image } from "../data/User";


function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I’m passionate about building web apps using React!</p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;
