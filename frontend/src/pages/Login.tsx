const Login = () => {

  const handleSubmit = () => {
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="auth-form d-flex flex-column justify-content-around align-items-center mt-5">
        <h1 className='mb-4'>Log in</h1>
        <form className="d-flex flex-column justify-content-between row-gap-2 w-75">
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <div className="d-flex justify-content-center">
            <button className="btn mt-3" onClick={handleSubmit}>Log in</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login