import React from "react";

function Skills() {
  return (
    <section className="skill-section">
      <h1 className="skill-heading">Skills</h1>
      <div className="cards-container">
        <div className="skill-card">
          <div className="skill-card-body">
            <img src="src/assets/html_logo_img.svg" alt="html" />
            <h6 className="card-heading">Html</h6>
          </div>
        </div>
        <div className="skill-card">
          <div className="skill-card-body">
            <img src="src/assets/Css3_logo_Img.svg" alt="Css" />
            <h6 className="card-heading">CSS</h6>
          </div>
        </div>
        <div className="skill-card">
          <div className="skill-card-body">
            <img src="src/assets/Javascript_logo_img.svg" alt="Javascript" />
            <h6 className="card-heading">Javascript</h6>
          </div>
        </div>
        <div className="skill-card">
          <div className="skill-card-body">
            <img src="src/assets/android_logo_img.svg" alt="Android" />
            <h6 className="card-heading">Android</h6>
          </div>
        </div>
        <div className="skill-card">
          <div className="skill-card-body">
            <img src="src/assets/React_logo_img.svg" alt="React js" />
            <h6 className="card-heading">React js</h6>
          </div>
        </div>
        <div className="skill-card">
          <div className="skill-card-body">
            <img src="src/assets/Nodejs_logo_img.svg" alt="Node js" />
            <h6 className="card-heading">Node js</h6>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
