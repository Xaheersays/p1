import React, { useState } from 'react';
import Links from './Links';
import hamburger from 'C:/zaheer/react/projects/project01/vite-project/src/assets/hamburger-svgrepo-com.svg';
import '../../App.css';
import { BrowserRouter as Router } from 'react-router-dom';

function Header() {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <Router>
      <div className='flex md:pl-20 md:pr-20 pt-4 pb-4 pl-12 pr-12 items-center justify-between h-20'>
        <h1 className='font-bold text-2xl'>GPT-3</h1>
        <Links />
        <div className='flex h-12 justify-center'>
          <button className='w-1/2 cursor-pointer px-4 bg-slate-950 rounded-md'>
            SignIn
          </button>
          <button className='bg-orange-700 px-4 rounded-lg cursor-pointer w-1/2'>
            SignUp
          </button>
          {/* hamburger */}
          <div className='relative'>
            <img
              onClick={handleShow}
              src={hamburger}
              className='h-12 w-8 ml-4 cursor-pointer md:hidden'
              alt="Hamburger Icon"
            />
            {show && (
              <div className='absolute top-16 left-0 bg-slate-300 p-4'>
                <p>12122</p>
                <Links />
              </div>
            )}
          </div>
        </div>
      </div>
    </Router>
  );
}

export default Header;
