import React from 'react'
import Login from './Login'
import { Route, Routes } from "react-router-dom"
import Home from './Home'
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App