import React from 'react'

function Part3() {
  return (
    <div className='md:pl-20 md:pr-20
    pt-4
    pb-4
    pl-12
    pr-12 
    mt-24'>
        <div className='bg-gradient-to-r from-violet-500 via-pink-500 to-orange-500   md:flex-row
        flex flex-col items-center gap-10 justify-center rounded-3xl p-10' >
            <div>
                <p className='text-md font-mono font-semibold'>Request Early Access to Get Started</p>
                <p className='text-3xl font-mono font-bold'>Register Today & start exploring the endless possibilities.</p>
            </div>
            <button className='bg-black text-white
            w-44 p-5 rounded-full font-semibold
            '>Get Started</button>
        </div>
    </div>
  )
}

export default Part3