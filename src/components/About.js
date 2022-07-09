import '../assets/scss/About.scss'
import model from '../assets/images/3D Man Standing.png'
import cv from '../assets/files/Von Alfafara - CV.pdf'

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="cards specializations">
          <div className="card">
            <div className="container">
              <span className="computer-icon"></span>
              <h3>web developer</h3>
              <p>As a full-stack developer, I have been using Vue as my main tool for building interfaces and Laravel for processing data in and out. I sometimes experiment with ExpressJS to release my creativeness in software architecture</p>
            </div>
          </div>
          <div className="card">
            <div className="container">
              <span className="mobile-icon"></span>
              <h3>mobile app developer</h3>
              <p>Ever since mobile app development evolved into using web technologies, I have gained an interest in working and creating in this field. HTML, CSS, and Javascript are my main tools in developing mobile apps.</p>
            </div>
          </div>
        </div>
        <div className="main">
          <div>
            <img src={model} alt="" />
          </div>
          <div>
            <h1>4 years of experience</h1>
            <p>I have worked on wide range of projects at multiple companies and businesses, both local and international. Along the way, I experienced using different technologies and methodologies to execute tasks effifiently and show quality results. I am proficient at web development, but my experience also extends in creating software and mobile apps using web technologies.</p>
            <p>When I am not programming, I spend my time playing video games, or go through a different universe with my guitar.</p>
            <div className="cards columned">
              <div className="card stats light">
                <h1>7</h1>
                <p>freelance projects</p>
              </div>
              <div className="card stats light">
                <h1>3</h1>
                <p>trainings / seminars</p>
              </div>
              <div className="card stats light">
                <h1>1</h1>
                <p>passed certification</p>
              </div>
              <div className="card stats light">
                <h1>5</h1>
                <p>programming languages</p>
              </div>
            </div>
            <a href={cv} download>DOWNLOAD RESUME</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About