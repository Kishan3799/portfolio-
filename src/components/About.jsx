import React from "react";

function About() {
  return (
    <section className="about-section">
      <h1 className="about-heading">About Me</h1>
      <div className="about-info">
        <div className="profile_image">
          <div className="rectangle-frame">
            <img src="src/assets/myimage.png" alt="Kishan verma" />
          </div>
        </div>
        <div className="profile_bio">
          <p>Welcome to my Portfolio website! My name is Kishan Verma & I am a Frontend and Mobile App Developer. I have a passion for creating websites and Mobile Apps.</p>
          <p>I have always been interested in [Your field], and after completing my [Degree] at [University], I knew that I wanted to pursue a career in this field. Since then, I have had the opportunity to work with a variety of clients and companies, helping them to create [what you do].</p>
          <p>Throughout my career, I have developed a wide range of skills in [List of skills] and have been recognized for my work with [Awards/Recognition]. I am always looking for new and exciting projects to work on and am dedicated to producing high-quality work that exceeds my clients' expectations.</p>
          <p>When I am not working, I enjoy [List of hobbies/interests], which I believe helps to keep my creativity flowing. I am also a big fan of [List of interests], which allows me to stay up-to-date with the latest trends and developments in my field.</p>
        </div>
      </div>
    </section>
  );
}

export default About;
