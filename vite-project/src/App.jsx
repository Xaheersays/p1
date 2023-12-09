import { useState } from 'react'
import './App.css'
import Links from './components/Header/Links'
import Header from './components/Header/Header'
import Home from './components/Home/Home.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Home/>
    </>
  )
}

export default App
