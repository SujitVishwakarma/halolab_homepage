import React, { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/home/Home'

function App() {


  return (
    <>
    <Navbar/>
    <div>
      <Home/>
    </div> 
    </>
  )
}

export default App
