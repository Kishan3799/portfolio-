import React from 'react'
import Button from './common/Button'
import Resume from '../assets/Kishan_Resume.pdf'
function Intro() {
  return (
    <section className="intro-section">
      <div className="left-section">
        <p className='heading-small'>Hi I'm</p>
        <p className='heading-large'><span>Kishan</span> Verma</p>
        <p className='heading-small opacity'>Web and Mobile Developer</p>
        <Button link={Resume} filename="resume.pdf" buttonType = "Download Resume"/>
      </div>
      <div className="right-section">
        <img src="src/assets/header_img.svg" alt="Profile Image" />
      </div>
    </section>
  )
}


export default Intro
