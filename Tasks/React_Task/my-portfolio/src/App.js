import React, { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Education from "./components/Education";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("about");

  return (
    <div className="App">
      <header>
        <h1>Adham Haitham's Portfolio</h1>
        <nav>
          <button
            onClick={() => setActiveSection("about")}
            className={activeSection === "about" ? "active" : ""}
          >
            About
          </button>
          <button
            onClick={() => setActiveSection("projects")}
            className={activeSection === "projects" ? "active" : ""}
          >
            Projects
          </button>
          <button
            onClick={() => setActiveSection("skills")}
            className={activeSection === "skills" ? "active" : ""}
          >
            Skills
          </button>
          <button
            onClick={() => setActiveSection("education")}
            className={activeSection === "education" ? "active" : ""}
          >
            Education
          </button>
          <button
            onClick={() => setActiveSection("contact")}
            className={activeSection === "contact" ? "active" : ""}
          >
            Contact
          </button>
        </nav>
      </header>
      <main>
        <TransitionGroup>
          <CSSTransition key={activeSection} timeout={300} classNames="fade">
            <div>
              {activeSection === "about" && <About />}
              {activeSection === "projects" && <Projects />}
              {activeSection === "skills" && <Skills />}
              {activeSection === "education" && <Education />}
              {activeSection === "contact" && <Contact />}
            </div>
          </CSSTransition>
        </TransitionGroup>
      </main>
    </div>
  );
}

export default App;
