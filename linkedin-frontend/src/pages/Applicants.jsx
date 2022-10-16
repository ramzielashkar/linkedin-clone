import LandingNav from "../components/LandingNav";
import { useState } from 'react';
import cover from '../assets/cover.PNG'
import profile from '../assets/profile.jpg'
import JobCard from '../components/JobCard';
import AddJob from "./AddJob";
import ApplicantCard from "../components/ApplicantCard";
const Applicants = () => {
    return(
        <>
            <LandingNav 
            path={'company'}/>
        <section className="bg-background flex px-56 py-4 h-full">
            <div className="flex flex-col bg-white rounded-xl pb-4 w-1/5 mr-8 h-48 mb-128">
                <div className=" relative flex rounded-xl h-18">
                    <img className='rounded-t-xl' src={cover} alt=""/>
                    <div className="absolute rounded-full border left-24 top-7">
                        <img className='rounded-full' src={profile} alt="" width={60} height ={60} />
                    </div>
                </div>
                <div className='bg-white flex flex-col items-center justify-center mt-10'>
                    <a className='font-semibold mb-2 hover:underline' href="">Ramzi El Ashkar</a>
                    <p className='opacity-80 text-sm'>Web Developer</p>
                </div>
            </div>

            <div className="bg-white rounded-xl flex flex-col py-6 px-4">
                <div className="flex justify-between">
                <p className='text-xl font-semibold mb-10'>Job Name</p>
                </div>
                
                <div className='flex flex-col'>
                    <ApplicantCard />
                </div>
            </div>
        </section>

        </>
    );
}
export default Applicants;