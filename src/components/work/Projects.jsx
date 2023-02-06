import React from 'react'
import './Projects.css'

function Projects({id}) {
  return (
    <section className="project-section" id={id}>
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        <div className="project-card">
          <div className="project-card-body">
            <img src="src/assets/project_img.jpg" alt="Project 1" />
            <h4 className="project-card-title">Project 1</h4>
            </div>
        </div>
        <div className="project-card">
          <div className="project-card-body">
            <img src="src/assets/project_img.jpg" alt="Project 1" />
            <h4 className="project-card-title">Project 2</h4>            
          </div>
        </div>
        <div className="project-card">
          <div className="project-card-body">
            <img src="src/assets/project_img.jpg" alt="Project 1" />
            <h4 className="project-card-title">Project 2</h4>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
