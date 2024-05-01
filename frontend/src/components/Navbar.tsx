import { NavLink, useNavigate } from "react-router-dom"
import axiosInstance from "../utils/axiosInstance";
import { useAuth } from "../contexts/AuthContext";

const Navbar = () => {
  const { isLoggedIn, setIsLoggedIn } = useAuth()
  const navigate = useNavigate();

  const handleLoginButton = () => {
    navigate('/login')
  }

  const handleSignupButton = () => {
    navigate('/register')
  }

  const handleLogout = () => {
    axiosInstance.post('/logout')
      .then(res => {
        if (res.status === 200) {
          setIsLoggedIn(false)
          navigate('/')
        }
      })
      .catch(err => {
        console.log(err);

      })
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
                <NavLink className="nav-link" to="/">Home</NavLink>
                <NavLink className="nav-link" to="/create">Create</NavLink>
                <NavLink className="nav-link" to="/about">About</NavLink>
                {!isLoggedIn ? (
                  <>
                    <button type="button" className="btn px-4" onClick={handleLoginButton}>Log in</button>
                    <button type="button" className="btn px-4" onClick={handleSignupButton}>Sign up</button>
                  </>
                ) : (<button type="button" className="btn px-4" onClick={handleLogout}>Logout</button>)}

              </div>
            </div>
          </div>
        </nav>
      </div >
      <div className="col-md-1"></div>
    </div >
  )
}

export default Navbar