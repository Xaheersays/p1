import { useState } from 'react'
import './App.css'
import Links from './components/Header/Links'
import Header from './components/Header/Header'
import Home from './components/Home/Home.jsx'
import Brand from './components/Brand/Brand.jsx'
import WhatGpt from './components/WhatGpt/WhatGpt.jsx'
import Possiblity from './components/Possiblity/Possiblity.jsx'
import Blog from './components/Blog/Blog.jsx'
import Footer from './components/Footer/Footer.jsx'

function App() {


  return (
    <>
      <Header/>
      <Home/>
      <Brand/>
      <WhatGpt/>
      <Possiblity/>
      <Blog/>
      <Footer/>
    </>
  )
}

export default App
