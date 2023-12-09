import React from 'react'
import '../../App.css'

function WhatGpt() {
  return (
    <div className='md:pl-20 md:pr-20
    pt-4
    pb-4
    pl-12
    pr-12 
    mt-24'>
    <div className='bgg flex flex-col gap-10'>
        
        <div className='  p-8'>
            <div className='border-t-4 border-yellow-500 w-20  '></div>
            <div className=' md:flex md:justify-between'>
                <div className='font-bold text-2xl
                w-96
                '>
                What is GPT-3
                </div>
                <div className='gradient__text font-medium text-md w-9/12'>
                We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.
                </div>
            </div>
        </div>

        <div className=' border p-8 md:flex justify-bewtween'>
            <div className='text-4xl font-mono font-bold gradtext md:max-w-2/3 md:text-5xl '>
            The possibilities are beyond your imagination
            </div>
            <div className='cursor-pointer text-orange-600  mt-5 md:text-xl md:font-semibold' > 
            Explore the Library
            </div>
        </div>
        <div className=' pl-16 pt-4 pr-8 flex gap-4'>
            <div className=' flex-1'>
                
                <div className='border-t-4 border-yellow-500 w-20  md:mt-8'></div>
                <div>
                    <p className='font-bold text-2xl '>Chatbots</p>
                    <p className='mt-2 gradient__text text-md font-semibold'>We so opinion friends me message as delight. Whole front do of plate heard oh ought.
                    </p>
                </div>
            </div>
            <div className='flex-1'>
                <div className='border-t-4 border-yellow-500 w-20 mt-8 '></div>
                <div>
                    <p className='font-bold text-2xl '>Knowledgebase</p>
                    <p className='mt-2 gradient__text text-md font-semibold'>At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments 
                    </p>
                </div>
            </div>
            <div className=' flex-1'>
                <div className='border-t-4 border-yellow-500 w-20 mt-8  '></div>
                <div>
                    <p className='font-bold text-2xl '>Education</p>
                    <p className='mt-2 mb-10 gradient__text text-md font-semibold'>At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b
                    </p>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default WhatGpt