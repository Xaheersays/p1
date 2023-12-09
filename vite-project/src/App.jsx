import { useState } from 'react'
import './App.css'
import Links from './components/Header/Links'
import Header from './components/Header/Header'
import Home from './components/Home/Home.jsx'
import Brand from './components/Brand/Brand.jsx'
import WhatGpt from './components/WhatGpt/WhatGpt.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Home/>
      <Brand/>
      <WhatGpt/>
    </>
  )
}

export default App
