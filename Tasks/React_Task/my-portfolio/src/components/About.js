import React from "react";
import Profile from "../assets/images/Profile.jpg"; // Adjust the path if necessary

const About = () => {
  return (
    <section id="about" className="section">
      <h2>About</h2>
      <img src={Profile} alt="Adham Haitham" className="profile-photo" />
      <p>
        A passionate programmer with a design background, I am a driven freshman
        at EJUST eager to apply my STEM education to a career in web
        development. My academic journey has honed my leadership, research, and
        problem-solving abilities, particularly through tackling Egypt's complex
        challenges in capstone projects. I am excited to leverage these skills
        to create innovative and user-centric web solutions.
      </p>
    </section>
  );
};

export default About;
