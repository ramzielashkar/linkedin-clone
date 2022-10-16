import React from 'react'
import Input from '../components/Input';
import LandingNav from '../components/LandingNav';
import landingImg from '../assets/landing.svg';
import { useNavigate } from "react-router-dom";




// Landing Page
const Landing = () => {
    const navigate = useNavigate();

    // function to navigate to login page
    const loginPage = () =>{
        navigate('/login');
    }

  return (
    <>
        <LandingNav
            path = {'landing'}
        />

        <div className='flex pl-56 pt-16'>
            <div className=' flex flex-col w-1/2'>
                <h1 className='text-6xl text-landing font-extralight mb-4'>Join the biggest</h1>
                <h1 className='text-6xl text-landing font-extralight mb-10'>professional community</h1>
                <form className='flex flex-col w-3/4'>
                    <Input
                    path ={'sigin'}
                    type = {'email'}
                    placeholder = {'Email'} 
                    />
                    <Input
                    path ={'sigin'}
                    type = {'password'}
                    placeholder = {'Password (8+ characters)'} 
                    title = 'Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters'
                    pattern={'(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}'}
                    />
                    <p className='w-3/4 text-base font-normal mb-4'>By clicking Agree & Join, you agree to the 
                    LinkedIn <a className='text-primary font-bold' href=''>User Agreement</a>, <a className='text-primary font-bold' href=''>Privacy Policy</a>,
                     and <a className='text-primary font-bold' href=''>Cookie Policy</a>.</p>
                     <input type="submit" value = "Agree & Join" className='w-4/5 py-4 text-xl text-center bg-primary rounded-full opacity-80 hover:opacity-100 text-white cursor-pointer mb-4'/>
                     <div className='flex w-4/5 items-center mb-6'>
                        <div className='w-48 border-gray-400 border bg-gray-400'></div>
                        <p className='mx-6 text-gray-500 text-lg text-bold'>or</p>
                        <div className='w-48 border-gray-400 border bg-gray-400'></div>
                     </div>
                     <p className='w-4/5 text-gray-600 text-lg font-normal text-center'>Already on LinkedIn? <a onClick ={loginPage} className='font-bold cursor-pointer text-purple-600 hover:underline'>Sign in</a></p>
                </form>
            </div>
            <div className='mr-2 mb-4'>
                <img src={landingImg} alt="" />
            </div>
        </div>

    </>
    )
}


export default Landing;