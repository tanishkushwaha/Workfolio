import { Link, useNavigate } from "react-router-dom"

const Navbar = () => {

  const navigate = useNavigate();

  const handleLoginButton = () => {
    navigate('/login')
  }

  const handleSignupButton = () => {
    navigate('/register')
  }

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
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                <Link className="nav-link" to="/create">Create</Link>
                <a className="nav-link" href="/dummy_page">Tools</a>
                <Link className="nav-link" to="/about">About</Link>
                <button type="button" className="btn px-4" onClick={handleLoginButton}>Log in</button>
                <button type="button" className="btn px-4" onClick={handleSignupButton}>Sign up</button>
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