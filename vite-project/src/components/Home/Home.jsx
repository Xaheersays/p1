import React from 'react'
import '../../App.css'
import ppl from '../../assets/people.png'
import ai from '../../assets/ai.png'

function Home() {
  return (
    <div className='flex flex-col md:flex-row  gap-10 
    md:pl-20 md:pr-20
        pt-4
        pb-4
        pl-12
        pr-12 
        mt-24
        '>
        <div className='flex flex-col gap-12  
        md:w-1/4
        flex-1

        ' >
            <h2 className=' font-bold text-6xl gradient__text md:leading-[6rem] '>
            Let's Build Something amazing with GPT-3 OpenAI
            </h2>
            <p className=' gradient__text text-xl'>
            Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
            </p>
            <div className=' flex justify-center'>
                <input placeholder="Your Email Address" type="text" id='inp'
                className='bg-slate-700 h-16 w-2/3 p-2 rounded-tl-md rounded-bl-md focus:outline-none focus:ring focus:border-sky-400' />
                <label htmlFor='inp' className='bg-orange-700 flex flex-col items-center justify-center text-2xl
                rounded-tr-md rounded-br-md
                 w-1/3'>Get Started</label>
            </div>
            <div className='flex flex-col items-center'>
                <img src={ppl} alt="" />
                <p className='text-xl font-mono'>1,600 people requested access a visit in last 24 hours</p>
            </div>
        </div>
        {/* div for image */}
        <div className=' flex-1'>
            <img  className='  md:h-[700]' src={ai}></img>
        </div>
    </div>

  )
}

export default Home