import React from 'react'

function Header() {
  return (
    <header>
      <nav className="nav-container">
        <div className="logo">
            <a href="/">Kishan</a>
        </div>
        <ul className="nav-list">
            <li className="nav-items">Home</li>
            <li className="nav-items">About</li>
            <li className="nav-items">Skills</li>
            <li className="nav-items">Projects</li>
            <li className="nav-items">Services</li>
            <li className="nav-items">Contact</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
