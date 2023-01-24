import React from 'react'

function Projects() {
  return (
    <section className="project-section">
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
