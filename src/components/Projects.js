import '../assets/scss/Projects.scss'
import { useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'

// Wedding Website
import p1_1 from '../assets/images/Featured Projects/1 J_B Wedding/1 Home.png'
import p1_2 from '../assets/images/Featured Projects/1 J_B Wedding/2 Groom and Bride.png'
import p1_3 from '../assets/images/Featured Projects/1 J_B Wedding/3 Prenup.png'
import p1_4 from '../assets/images/Featured Projects/1 J_B Wedding/4 Entourage.png'
import p1_5 from '../assets/images/Featured Projects/1 J_B Wedding/5 Suppliers.png'

// Petnet Forex Website
import p2_1 from '../assets/images/Featured Projects/2 PetNet Forex/1 Home.png'
import p2_2 from '../assets/images/Featured Projects/2 PetNet Forex/2 News and Articles.png'
import p2_3 from '../assets/images/Featured Projects/2 PetNet Forex/3 Products and Services.png'
import p2_4 from '../assets/images/Featured Projects/2 PetNet Forex/4 Feedbacks.png'
import p2_5 from '../assets/images/Featured Projects/2 PetNet Forex/5 FAQs.png'

// PERAHub Website
import p3_1 from '../assets/images/Featured Projects/3 PeraHub/1.PNG'
import p3_2 from '../assets/images/Featured Projects/3 PeraHub/2.PNG'
import p3_3 from '../assets/images/Featured Projects/3 PeraHub/3.PNG'

// PERAHub Website
import p4_1 from '../assets/images/Featured Projects/4 UP News Portal/1 Home.png'
import p4_2 from '../assets/images/Featured Projects/4 UP News Portal/2 News.png'
import p4_3 from '../assets/images/Featured Projects/4 UP News Portal/3 Graphics.png'
import p4_4 from '../assets/images/Featured Projects/4 UP News Portal/4 Filter.png'
import p4_5 from '../assets/images/Featured Projects/4 UP News Portal/5 Footer.png'

const Projects = () => {
  const [project, setProject] = useState(0)

  const changeProject = (id) => {
    setProject(id)
  }

  const showButtonText = (isCurrentProject, title) => {
    if (window.innerWidth > 1079) return title
    return isCurrentProject && window.innerWidth < 1079 ? title : ''
  }

  const checkActive = (isCurrentProject) => {
    return isCurrentProject ? 'active' : ''
  }

  const getProject = () => {
    if (project === 0) {
      return (
        <div className="project">
          <Carousel showThumbs={false} showStatus={false} useKeyboardArrows={true} infiniteLoop={true} dynamicHeight={true}>
            <img src={p1_1} alt="" />
            <img src={p1_2} alt="" />
            <img src={p1_3} alt="" />
            <img src={p1_4} alt="" />
            <img src={p1_5} alt="" />
          </Carousel>
          <div className="description">
            <h3 className="light">Jo-Anne &amp; Benjamin Wedding</h3>
            <p className="subtitle">2018</p>
            <p className="subtitle role">developer</p>
            <p>This project is a wedding invitation website for my sister and her groom (now husband) that includes necessary details for the guests such as date, time, prenup images, entourage, suppliers, and location.</p>
            <div className="tags">
              <span>HTML</span>
              <span>CSS</span>
              <span>JS</span>
            </div>
          </div>
        </div>
      )
    }
    else if (project === 1) {
      return (
        <div className="project">
          <Carousel showThumbs={false} showStatus={false} useKeyboardArrows={true} infiniteLoop={true} dynamicHeight={true}>
            <img src={p2_1} alt="" />
            <img src={p2_2} alt="" />
            <img src={p2_3} alt="" />
            <img src={p2_4} alt="" />
            <img src={p2_5} alt="" />
          </Carousel>
          <div className="description">
            <h3 className="light">PETNET Forex Website</h3>
            <p className="subtitle">2021</p>
            <p className="subtitle role">fullstack developer</p>
            <p>This is the commercial website for PETNEt's foreigh exchange services. This website includes a home and about us page, news and articles page where visitors can read the latest news on PETNET's forex services, products and services page, feedbacks, and FAQs</p>
            <div className="tags">
              <span>Nuxt</span>
              <span>SCSS</span>
              <span>Strapi</span>
            </div>
          </div>
        </div>
      )
    }
    else if (project === 2) {
      return (
        <div className="project">
          <Carousel showThumbs={false} showStatus={false} useKeyboardArrows={true} infiniteLoop={true} dynamicHeight={true}>
            <img src={p3_1} alt="" />
            <img src={p3_2} alt="" />
            <img src={p3_3} alt="" />
          </Carousel>
          <div className="description">
            <h3 className="light">PERAHub Website</h3>
            <p className="subtitle">2022</p>
            <p className="subtitle role">fullstack developer</p>
            <p>This is the commercial website for PERAHub's remittance services This website includes a home and about us page, services page, promos page where visitors can discover discounts and additional benefits on availing services, news and articles page where visitors can read the latest news on PERAHub's services, branches, and FAQs</p>
            <div className="tags">
              <span>Nuxt</span>
              <span>SCSS</span>
              <span>Strapi</span>
            </div>
          </div>
        </div>
      )
    }
    else if (project === 3) {
      return (
        <div className="project">
          <Carousel showThumbs={false} showStatus={false} useKeyboardArrows={true} infiniteLoop={true} dynamicHeight={true}>
            <img src={p4_1} alt="" />
            <img src={p4_2} alt="" />
            <img src={p4_3} alt="" />
            <img src={p4_4} alt="" />
            <img src={p4_5} alt="" />
          </Carousel>
          <div className="description">
            <h3 className="light">Philippine Collegian Website (PHKule)</h3>
            <p className="subtitle">2021</p>
            <p className="subtitle role">ftontend developer</p>
            <p>PhKule is a website developed for the University of the Philippines Diliman's official student publication, The Philippine Collegian. Articles and posts from their publications and social media accounts can be viewed and read from this website. </p>
            <div className="tags">
              <span>Vue</span>
              <span>Nuxt</span>
              <span>SCSS</span>
              <span>Laravel</span>
            </div>
          </div>
        </div>
      )
    }
  }

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h1>Featured Projects</h1>
        <p>Below is the list of projects I have developed for an event, a university, companies, and businesses</p>
        <div className="button-group">
          <button className={checkActive(project === 0)} onClick={() => changeProject(0)}>{showButtonText(project === 0, 'J&B Wedding Website')}</button>
          <button className={checkActive(project === 1)} onClick={() => changeProject(1)}>{showButtonText(project === 1, 'PetNet Forex Website')}</button>
          <button className={checkActive(project === 2)} onClick={() => changeProject(2)}>{showButtonText(project === 2, 'PERAHub Website')}</button>
          <button className={checkActive(project === 3)} onClick={() => changeProject(3)}>{showButtonText(project === 3, 'Philippine Collegian Website')}</button>
        </div>
        {getProject()}
      </div>
    </section>
  )
}

export default Projects