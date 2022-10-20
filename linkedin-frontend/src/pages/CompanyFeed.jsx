import LandingNav from "../components/LandingNav";
import { useState } from 'react';
import cover from '../assets/cover.PNG'
import profile from '../assets/profile.jpg'
import JobCard from '../components/JobCard';
import AddJob from "./AddJob";
import { useNavigate } from "react-router-dom";
import { useCompanyJobs } from "../query/CompanyJobs/companyJobs";
import { QueryClient, useQueryClient } from "@tanstack/react-query";

const CompanyFeed = () => {
    const queryClient = useQueryClient();
    const currentUser = queryClient.getQueryData(['CurrentUser']);
    console.log(queryClient.getQueryData(['CurrentUser']));
    const navigate = useNavigate();
    const [showAdd, setShowAdd] = useState(false);
    const { data: allCompanyJobs , isLoading: isLoadingAllJobs} = useCompanyJobs({
        enabled:true
    })
    const openAddJob = ()=>{
        setShowAdd(true);
    }
    const closeAddJob = ()=>{
        setShowAdd(false);
    }
    const seeApplicants = () => {
        navigate('../applicants');
    }

    if(isLoadingAllJobs) return null;
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
                <p className='text-xl font-semibold mb-10'>Your Jobs</p>
                <button className="bg-primary border-none text-white rounded-full p-1 w-36 h-10 text-center cursor-pointer" onClick={openAddJob}>Add Job</button>
                </div>
                
                <div className='flex flex-col'>
                    {allCompanyJobs?.map((job)=>{
                        console.log(job);
                        return(
                         <JobCard 
                         path={'company'}
                         name={job.name}
                         type={job.type}
                         description={job.description}
                         company={job.company_id.name}
                         onClick = {seeApplicants}
                         />
                        );
                    })}          
                </div>
            </div>
        </section>
        <AddJob 
        open ={showAdd}
        onClose = {closeAddJob}
        />
        </>
    );
}

export default CompanyFeed;