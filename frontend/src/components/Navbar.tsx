
const Navbar = () => {
  return (
    <div className="row fixed-top">
      <div className="col-md-1"></div>
      <div className="col-md-10">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="/"><span className="logo-part-1">Work</span><span
              className="logo-part-2">folio</span></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
              aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
                <a className="nav-link" href="/create">Create</a>
                <a className="nav-link" href="/dummy_page">Tools</a>
                <a className="nav-link" href="#">About</a>
                <button type="button" className="btn px-4" data-bs-toggle="modal"
                  data-bs-target="#loginPopup">Log in</button>
                <button type="button" className="btn px-4" data-bs-toggle="modal"
                  data-bs-target="#signupPopup">Sign up</button>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="col-md-1"></div>
    </div>
  )
}

export default Navbar