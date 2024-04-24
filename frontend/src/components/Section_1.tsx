import vector_1 from "../assets/vector-1.svg"
import vector_2 from "../assets/vector-2.svg"
import vector_3 from "../assets/vector-3.svg"

const Section_1 = () => {
  return (
    <div className="container-fluid font-poppins slide-2">
      <div className="row slide-2-head">
        <div className="col-3"></div>
        <div className="col-6 text-center">
          <h3 className="font-medium">Three easy-to-follow steps for creating a polished and professional resume</h3>
        </div>
        <div className="col-3"></div>
      </div>
      <div className="row slide-2-body">
        <div className="col-md-1"></div>
        <div className="col-md-2 col-sm-12">
          <img src={vector_2} alt="vector-2.svg" className="object-fit-scale" />
          <p className="mt-3">Click to add job-specific content, pre-written by experts.</p>
        </div>
        <div className="col-md-2"></div>
        <div className="col-md-2 col-sm-12">
          <img src={vector_1} alt="vector-1.svg" className="object-fit-scale" />
          <p className="mt-3">Choose from our extensive template collection and personalize to your style.</p>
        </div>
        <div className="col-md-2"></div>
        <div className="col-md-2 col-sm-12">
          <img src={vector_3} alt="vector-3.svg" className="object-fit-contain mt-4" />
          <p className="mt-3">Download in the file format you need and send!</p>
        </div>
        <div className="col-md-1"></div>
      </div>
      <div className="row slide-2-button">
        <div className="col-md-5"></div>
        <div className="col-md-2 col-sm-12">
          <button className="btn px-4 font-medium">Build My Resume</button>
        </div>
        <div className="col-md-5"></div>
      </div>
    </div>
  )
}

export default Section_1