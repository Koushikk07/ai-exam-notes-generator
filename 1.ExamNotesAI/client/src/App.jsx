import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Auth from './pages/Auth'

export default function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/auth" element={<Auth/>}/>
    </Routes>
    
    </>
  )
}
