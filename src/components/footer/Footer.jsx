import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <footer>
      <div className="links-icons">
        <div className="twitter">
          <a href="https://twitter.com/KishanVerma03" target="_blank">
            <img src="src/assets/Twitter_logo.svg" alt="twitter" />
          </a>
        </div>
        <div className="linkedin">
          <a href="www.linkedin.com/kishan-verma-167076253" target="_blank">
            <img src="src/assets/linkedin_logo.svg" alt="linkedin" />
          </a>
        </div>
        <div className="github">
          <a href="https://github.com/Kishan3799" target="_blank">
            <img src="src/assets/github_logo.png" alt="github" />
          </a>
        </div>
      </div>
      <div className="footer-content">
        <p>Copyright <span>&copy;</span> by Kishan Verma, All rights are reserved</p>
      </div>
    </footer>
  )
}

export default Footer
