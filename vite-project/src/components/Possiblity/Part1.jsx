import React from 'react'

function Part1() {
  return (
    // padding div
    <div className='  
    md:pl-20 md:pr-20
        pt-4
        pb-4
        pl-12
        pr-12 
        mt-24
        mb-24'
    
        >



        <div className=' flex gap-10 flex-col md:flex-row '>
            <div className='md:w-2/4'>
                <p className='font-bold text-4xl leading-loose bg-gradient-to-r from-purple-500 via-red-500 to-pink-500 text-transparent bg-clip-text'>The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</p>
                <p className='text-xl text-orange-700 mt-4 mb-8'>Request Early Access to Get Started</p>
            </div>
            {/* combined div */}
            <div className=' flex gap-10'>
                <div className='flex flex-col gap-10 justify-around'>
                    <div className=''>
                        <div className='border-t-4 border-yellow-500 w-20'></div>
                        <div className='text-2xl'>Improving end distrusts instantly</div>
                    </div>
                    <div>
                        <div className='border-t-4 border-yellow-500 w-20'></div>
                        <div className='text-2xl'>Become the tended active</div>
                    </div>
                    <div>
                        <div className='border-t-4 border-yellow-500 w-20'></div>
                        <div className='text-2xl'>Message or am nothing</div>
                    </div>
                    <div>
                        <div className='border-t-4 border-yellow-500 w-20'></div>
                        <div className='text-2xl'>Really boy law county</div>
                    </div>
                </div>
                <div className='flex flex-col justify-around gradient__text text-xl'>
                    <div style={{'margin-top':-8}}>From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.</div>
                    <div className=''>Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.</div>
                    <div className=''>Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.</div>
                    <div className=''>Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush..</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Part1