import React from 'react'
import LandingNav from '../components/LandingNav';

// Landing Page
const Landing = () => {
  return (
    <>
        <LandingNav
            path = {'landing'}
        />

        <div className='flex pl-56 pt-16'>
            <div className=' flex flex-col w-1/2'>
                <h1 className='text-6xl text-landing font-extralight mb-4'>Join the biggest</h1>
                <h1 className='text-6xl text-landing font-extralight'>professional community</h1>
                
            </div>
        </div>

    </>
    )
}


export default Landing;