import model from '../assets/images/3D Man Sitting.png'
import '../assets/scss/Hero.scss'

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-text">
          <p className="blue">HELLO, I'M VON</p>
          <h1 className="light">&lt; developer &gt;</h1>
          <p>Constantly grasping knowledge to this never ending technology evolution as it takes brain, skills, and enthusiasm to implement the best solution to a problem.</p>
          <button>GET STARTED</button>
        </div>
        <img src={model} alt="" />
      </div>
    </section>
  )
}

export default Hero