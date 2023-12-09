import React from 'react';
import { NavLink } from 'react-router-dom';

function Links() {
  const secs = ['Home', 'What Is GPT3?', 'Open AI', 'Case Studies', 'Library'];
  const lks = secs.map((ele, idx) => (
    <NavLink to='/home' key={idx} className='font-sans font-semibold text-white hidden md:block'>
      {ele}
    </NavLink>
  ));

  return <>{lks}</>;
}

export default Links;
