import cover from '../assets/cover.PNG'
const JobCard = () => {
    return(
       <div className="flex w-128 border-b-2 pb-4 mb-4">
        <div className='flex flex-col items-center align-middle justify-center mr-6'>
            <img src={cover} alt="" width={60} height={100}/>
        </div>
        <div className="flex flex-col flex-grow">
            <p className='text-xl text-primary font-semibold mb-1'>Job Type</p>
            <p className='text-md mb-1'>Company Name</p>
            <p className='text-md opacity-70'>Beirut, Lebanon</p>
        </div>
        <div className='flex flex-col gap-10'>
            <button className='bg-primary border-none text-white rounded-full p-1'>Follow</button>
            <p className='text-sm font-semibold cursor-pointer mr-2 text-primary text-end'>Easy Apply</p>
        </div>
       </div>
    );
}

export default JobCard;