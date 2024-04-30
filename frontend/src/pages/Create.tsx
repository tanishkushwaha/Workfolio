import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import ResumeCard from "../components/ResumeCard"
import axiosInstance from "../utils/axiosInstance"
import Spinner from "../components/Spinner"

const Create = () => {
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {

    axiosInstance.get('/user')
      .then(res => {
        setLoading(false)
        if (res.status === 200) {
          console.log(res.data);
        }
      })
      .catch(err => {
        console.log(err);
        navigate('/login')
      })

  }, [])



  return (
    <>
      {loading ? (
        <div className="vh-100 d-flex justify-content-center align-items-center bg-light">
          <Spinner />
        </div>

      ) : (

        <div className="container choose-template-container">
          <h1>Choose Template</h1>
          <div className="mt-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem', justifyContent: 'center', alignItems: 'center' }}>
            <ResumeCard />
            <ResumeCard />
            <ResumeCard />
            <ResumeCard />
            <ResumeCard />
          </div>
        </div>
      )}
    </>
  )
}

export default Create