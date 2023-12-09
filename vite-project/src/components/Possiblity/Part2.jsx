import React from 'react'
import possi from '../../assets/possibility.png'

function Part2() {
  return (
    <div >
        <div className='flex flex-col gap-10 md:flex-row
        md:pl-20 md:pr-20
        pt-4
        pb-4
        pl-12
        pr-12 
        mt-24
        '>
            <div>
                <img className='h-4/5' src={possi} alt="" />
            </div>
            <div className=' flex flex-col gap-10 justify-end'>
                <p className='text-xl font-mono font-semibold gradient__text'>Request Early Access to Get Started</p>
                <p className=' pb-3 text-5xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text '>The possibilities are beyond your imagination</p>
                <p className='text-xl font-mono gradient__text '>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                <p className='text-2xl  text-orange-700'>Request Early Access to Get Started</p>

            </div>
        </div>
    </div>
  )
}

export default Part2