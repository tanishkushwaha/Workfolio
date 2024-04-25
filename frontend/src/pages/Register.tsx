const Register = () => {

  const handleSubmit = () => {
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="auth-form d-flex flex-column justify-content-around align-items-center mt-5">
        <h1 className='mb-4'>Sign up</h1>
        <form className="d-flex flex-column justify-content-between row-gap-2 w-75">
          <input type="text" name="firstName" placeholder="First Name" />
          <input type="text" name="LastName" placeholder="Last Name" />
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
          <div className="d-flex mt-4">
            <input className="form-check-input me-2" type="checkbox" value="" id="flexCheckDefault" />
            <label className="form-check-label" htmlFor="flexCheckDefault">By signing up you agree to Term
              of service and Privacy Policy</label>
          </div>
          <div className="d-flex justify-content-center">
            <button className="btn mt-3" onClick={handleSubmit}>Sign up</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register