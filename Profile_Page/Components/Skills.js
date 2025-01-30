import React from "react";
import '../styles/styles.css';

function Skills() {
  return (
    <section className="skills-section">
      <h2>Skills</h2>
      <p>Here are some of my skills which I have been working on for the past 3 years.</p>
      <div className="skills-container">
        <SkillCard title="Frontend" skills={["React.js", "HTML", "CSS", "JavaScript", "Bootstrap", "Material UI"]} />
        <SkillCard title="Backend" skills={["Node.js", "Express.js", "Python", "Django", "MongoDB", "MySQL"]} />
        <SkillCard title="Other" skills={["Node.js", "Express.js", "Python", "Django", "MongoDB", "MySQL"]} />
      </div>
    </section>
  );
}

function SkillCard({ title, skills }) {
  return (
    <div className="skills-card">
      <h3>{title}</h3>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-item" key={index}>{skill}</div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
