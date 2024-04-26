import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

import Spinner from "../components/Spinner"

const Register = () => {

  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = (e: any) => {
    e.preventDefault()

    if (data.password !== data.confirmPassword) {
      alert("Passwords do not match!")
      return
    }

    setIsLoading(true)
    axios.post('/register', data, {
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((res: any) => {
        setIsLoading(false)
        console.log(res);

        if (res.status === 200) {
          navigate('/login')
        }
      })
      .catch((err) => {
        setIsLoading(false)
        console.log(err);
      })
  }

  const handleInput = (e: any) => {
    const { name, value } = e.target
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      {isLoading ? <Spinner /> : (
        <div className="auth-form d-flex flex-column justify-content-around align-items-center mt-5">

          <h1 className='mb-4'>Sign up</h1>

          <form className="d-flex flex-column justify-content-between row-gap-2 w-75" onSubmit={handleSubmit}>

            <input className="form-control" type="text" name="firstName" placeholder="First Name" value={data.firstName} onChange={handleInput} required />

            <input className="form-control" type="text" name="lastName" placeholder="Last Name" value={data.lastName} onChange={handleInput} required />

            <input className="form-control" type="email" name="email" placeholder="Email" value={data.email} onChange={handleInput} required />

            <input className="form-control" type="password" name="password" placeholder="Password" value={data.password} onChange={handleInput} required />

            <input className="form-control" type="password" name="confirmPassword" placeholder="Confirm Password" value={data.confirmPassword} onChange={handleInput} required />

            <div className="d-flex mt-4">

              <input className="form-check-input me-2" type="checkbox" value="" id="flexCheckDefault" required />

              <label className="form-check-label" htmlFor="flexCheckDefault">By signing up you agree to Term
                of service and Privacy Policy</label>

            </div>

            <div className="d-flex justify-content-center">
              <button className="btn mt-3" type="submit">Sign up</button>
            </div>

          </form>
        </div>
      )}
    </div>
  )
}

export default Register