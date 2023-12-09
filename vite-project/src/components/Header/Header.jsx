import React from 'react'
import Links from './Links'
import hamburger from 'C:/zaheer/react/projects/project01/vite-project/src/assets/hamburger-svgrepo-com.svg'
import '../../App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

function Header() {
    console.log(Links[0])

  return (
    <Router>

        <div className='flex border md:pl-20 md:pr-20
        pt-4
        pb-4
        pl-12
        pr-12 
        items-center justify-between h-20 '>
            <h1 className='font-bold text-2xl'>GPT-3</h1>
            
            {/* <Routes>

</Routes> */}
            <Links />

            <div className=' flex h-12 justify-center	'>
                <button className='w-44 cursor-pointer bg-slate-950 rounded-md'>
                    SignIn
                </button>
                <button className='bg-orange-700 w-44 rounded-lg cursor-pointer'>
                    SignUp
                </button> 
                {/* hamburger */}
                <div>
                <img src={hamburger} className='h-12 w-8 ml-4 cursor-pointer md:hidden' ></img>
                </div>
            </div>
        </div>
    </Router>
  )
}

export default Header