import React from "react";
import '../styles/styles.css';



function Projects() {
  return (
    
    <section className="project-section">
      <h2>Projects</h2>
      
      <div className="project-container">
        <ProjectCard title="Completed" />
        
      </div>
    </section>
  );
}
function ProjectCard({ title }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>

      
    </div>
  );
}

export default Projects;
