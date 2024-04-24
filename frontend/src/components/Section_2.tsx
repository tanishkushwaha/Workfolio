import vector_4 from "../assets/vector-4.svg"
import vector_5 from "../assets/vector-5.svg"
import vector_6 from "../assets/vector-6.svg"
import vector_7 from "../assets/vector-7.svg"



const Section_2 = () => {
  return (
    <div className="container-fluid slide-3">
      <div className="row slide-3-head">
        <div className="col-md-3"></div>
        <div className="col-md-6 col-sm-12 text-center">
          <h3 className="font-medium">Four reasons why. More than enough.</h3>
        </div>
        <div className="col-md-3"></div>
      </div>
      <div className="row slide-3-body">
        <div className="col-md-1"></div>
        <div className="col-md-5 col-sm-12 d-flex flex-column justify-content-center">
          <h4>Attractive Resume Templates</h4>
          <p>Go for a traditional design or satisfy your creative soul. Change colours and pick a layout that fits
            your needs.</p>
        </div>
        <div className="col-md-6 col-sm-12">
          <img src={vector_4} alt="vector-4.svg" className="object-fit-contain" />
        </div>
      </div>
      <br />
      <div className="row slide-3-body">
        <div className="col-md-1"></div>
        <div className="col-md-5 col-sm-12">
          <img src={vector_5} alt="vector-5.svg" className="object-fit-contain" />
        </div>
        <div className="col-md-5 col-sm-12 d-flex flex-column justify-content-center">
          <h4>Advice from Experts</h4>
          <p>Achieve success with less effort. Let the resume generator guide your writing and save your energy to
            build a career you’ve always dreamt of.</p>
        </div>
        <div className="col-md-1"></div>
      </div>
      <br />
      <div className="row slide-3-body">
        <div className="col-md-1"></div>
        <div className="col-md-5 col-sm-12 d-flex flex-column justify-content-center">
          <h4>Editor with Ready-Made Content</h4>
          <p>Get inspiration from expert-recommended examples if you hit writer’s block. Use them to complete your
            resume and let us take care of the rest.</p>
        </div>
        <div className="col-md-6 col-sm-12">
          <img src={vector_6} alt="vector-6.svg" className="object-fit-contain" />
        </div>
      </div>
      <br />
      <div className="row slide-3-body">
        <div className="col-md-1"></div>
        <div className="col-md-5 col-sm-12">
          <img src={vector_7} alt="vector-7.svg" className="object-fit-contain" />
        </div>
        <div className="col-md-5 col-sm-12 d-flex flex-column justify-content-center">
          <h4>Matching Cover Letter</h4>
          <p>Convince hiring managers to set up an interview with you with a cover letter that completes your job
            application. All you need is your resume. The rest is magic.</p>
        </div>
        <div className="col-md-1"></div>
      </div>
    </div>
  )
}

export default Section_2