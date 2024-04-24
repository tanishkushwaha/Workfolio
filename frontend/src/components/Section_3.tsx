import vector_8 from "../assets/vector-8.svg"
import vector_9 from "../assets/vector-9.svg"
import vector_10 from "../assets/vector-10.svg"


const Section_3 = () => {
  return (
    <div className="container-fluid slide-4">
      <div className="row slide-4-head">
        <div className="col-3"></div>
        <div className="col-6 text-center">
          <h2 className="font-medium">Create the best resume online.</h2>
          <br />
          <p>No need to start from zero! Resume building is easy with our preformatted resume templates, which are
            optimized for applicant tracking systems (ATS). Choose a style that works for you, from modern to
            professional and basic resumes. Customize in our Resume Builder and finish in just a few clicks.</p>
        </div>
        <div className="col-3"></div>
      </div>
      <div className="row slide-4-body justify-content-center">
        <div className="col-12">
          <div id="carouselExampleRide" className="carousel slide" data-bs-ride="true">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={vector_8} className="d-block object-fit-contain" alt="vector-8.svg" />
              </div>
              <div className="carousel-item">
                <img src={vector_9} className="d-block object-fit-contain" alt="vector-9.svg" />
              </div>
              <div className="carousel-item">
                <img src={vector_10} className="d-block object-fit-contain" alt="vector-10.svg" />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide"
              data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide"
              data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      <div className="row slide-4-foot">
        <div className="col-12 text-center">
          <h5 className="font-semibold">STANDOUT</h5>
          <p className="font-semibold">Lead the recruiter down your qualification with this easy-to-read design</p>
        </div>
      </div>
    </div>
  )
}

export default Section_3