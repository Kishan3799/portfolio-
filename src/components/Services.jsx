import React from 'react'

function Services() {
  return (
    <section className="service-section">
      <h1 className="service-heading">Service</h1>
      <div className="service-container">
        <div className="service-card">
          <div className="service-card-body">
            <img src="src/assets/website_developer.png" alt="Website Developer" />
            <h4 className="service-card-title">Website Builder</h4>
            </div>
        </div>
        <div className="service-card">
          <div className="service-card-body">
            <img src="src/assets/app_developer_img.png" alt="App Developer" />
            <h4 className="service-card-title">Mobile App Developer</h4>            
          </div>
        </div>
        <div className="service-card">
          <div className="service-card-body">
            <img src="src/assets/website-design.png" alt="Website design" />
            <h4 className="service-card-title">Website Design</h4>            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
