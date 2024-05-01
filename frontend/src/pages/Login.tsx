import { useState } from "react"
import { useNavigate } from "react-router-dom"

import Spinner from "../components/Spinner"
import axiosInstance from "../utils/axiosInstance"
import { useAuth } from "../contexts/AuthContext"

const Login = () => {

  const [data, setData] = useState({
    email: "",
    password: "",
  })

  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const { setIsLoggedIn } = useAuth()

  const handleSubmit = (e: any) => {
    e.preventDefault()

    setIsLoading(true)
    axiosInstance.post('/login', data, {
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((res) => {
        setIsLoading(false)
        console.log(res);

        if (res.status === 200) {
          setIsLoggedIn(true)
          navigate('/create')
        }
      })

      .catch((err) => {
        setIsLoading(false)

        if (err.response.status === 401) {
          alert("Invalid Credentials!")
        }

        console.log(err);
      })
  }

  const handleInput = (e: any) => {
    const { name, value } = e.target

    setData((prevData) => (
      {
        ...prevData,
        [name]: value,
      }
    ))
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      {isLoading ? <Spinner /> : (
        <div className="auth-form d-flex flex-column justify-content-around align-items-center mt-5">
          <h1 className='mb-4'>Log in</h1>
          <form className="d-flex flex-column justify-content-between row-gap-2 w-75" onSubmit={handleSubmit}>
            <input className="form-control" type="email" name="email" placeholder="Email" value={data.email} onChange={handleInput} required />
            <input className="form-control" type="password" name="password" placeholder="Password" value={data.password} onChange={handleInput} required />
            <div className="d-flex justify-content-center">
              <button type="submit" className="btn mt-3">Log in</button>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}

export default Login