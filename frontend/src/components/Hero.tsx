import hero_svg from "../assets/hero.svg"

const Hero = () => {
  return (
    <div className="container-fluid landing">
      <div className="row landing-content">
        <div className="col-md-1"></div>
        <div className="col-md-6 col-sm-12">
          <h2>Create, showcase, and inspire.</h2>
          <h2>Build your online portfolio with us.</h2>
          <br />
          <p>Create a resume quickly, easily, and for free with our resume maker!<br />in just minutes, build a
            resume to take your career to next level</p>
          <br />
          <button className="btn font-medium">Create My Resume</button>
          <br /><br />
          <p className="font-medium fs-6">No credit card required</p>
          <p className="font-medium fs-6 mt-3"><span className="material-symbols-outlined">arrow_upward</span> 30% higher
            chance of getting a job</p>
          <p className="font-medium fs-6 mt-3"><span className="material-symbols-outlined">arrow_upward</span> 42% higher
            response rate from recruiters</p>
        </div>
        <div className="col-md-5 col-sm-12">
          <img className="object-fit-scale" src={hero_svg} alt="hero.svg" />
        </div>
      </div>
    </div>
  )
}

export default Hero
