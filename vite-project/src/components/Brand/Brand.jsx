import React from 'react'
import Google from '../../assets/google.png'
import slack from '../../assets/slack.png'
import atlassian from '../../assets/atlassian.png'
import dropbox from '../../assets/dropbox.png'
import shopify from '../../assets/shopify.png'
import '../../App.css'

function Brand() {
  return (
    <div className='flex justify-around  gap-2 mt-24
    
        pt-4
        pb-4
        pl-28
        pr-28
        md:pl-44
        md:pr-44 
        flex-wrap
        '>
        <img src={Google} alt="" />
        <img src={slack} alt="" />
        <img src={atlassian} alt="" />
        <img src={dropbox} alt="" />
        <img src={shopify} alt="" />
    </div>
  )
}

export default Brand