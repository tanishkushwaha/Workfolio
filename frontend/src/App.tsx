import { Routes, Route } from 'react-router-dom'
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Create from './pages/Create';

const App = () => {

  const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:8080/api'
  })

  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/create' element={<Create />} />
      </Routes>

    </>
  )
}

export default App