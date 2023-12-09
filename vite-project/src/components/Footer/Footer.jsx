import React from 'react'

function Footer() {
  return (
    <div className='md:pl-20 md:pr-20
    pt-4
    pb-4
    pl-12
    pr-12 
    mt-24
    mb-24'>
        <div className='flex flex-col items-center justify-center'>
            <div className='bg-gradient-to-r from-violet-500 via-pink-500 to-orange-500 text-transparent bg-clip-text text-5xl font-bold  leading-normal  md:text-4xl text-center pb-5'>
            Do you want to step in to the future before others
            </div>
            <button className='bg-black text-center h-20 w-56 rounded-full font-bold'>Request Early Access</button>
        </div>
        <div className='flex gap-10 justify-between mt-20'>
            <div>
                <p className='text-5xl font-bold'>GPT-3</p>
                <p className='mt-4'>All Rights Reserved</p>
            </div>
            <div className='mt-10 md:mt-0 '>
                <p className='text-xl font-bold'>Links</p>
                <p className='mt-2'>Overons</p>
                <p className='mt-2'>Social Media</p>
                <p className='mt-2'>Counters</p>
                <p className='mt-2'>Contact</p>
            </div>
            <div>
                <p className='mt-10 md:mt-0  text-xl font-bold'>Company</p>
                <p className='mt-2'>Terms & Conditions</p>
                <p className='mt-2'>Privacy Policy</p>
                <p className='mt-2'>Contact</p>
            </div>
            <div>
                <p className='mt-10  md:mt-0 text-xl font-bold'>Get in touch</p>
                <p className='mt-2'>Crechterwoord K12 182 DK Alknjkcb</p>
                <p className='mt-2'>085-132567</p>
                <p className='mt-2'>info@payme.net</p>
            </div>
        </div>
            <div className='mt-12 text-center'><p>@2021 GPT-3. All rights reserved.</p></div>
    </div>
  )
}

export default Footer