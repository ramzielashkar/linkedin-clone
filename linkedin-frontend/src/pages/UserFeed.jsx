import cover from '../assets/cover.PNG'
import profile from '../assets/profile.jpg'
import JobCard from '../components/JobCard';

const UserFeed = () => {
    return (
        <section className="bg-background flex px-56 py-4">
            <div className="flex flex-col bg-white rounded-xl pb-4 w-1/5 mr-8">
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
                <p className='text-xl font-semibold '>Jobs For You</p>
                <p className='opacity-80 text-base mb-10'>Because you expressed interest in remote work</p>

                <div className='flex flex-col'>
                    <JobCard />
                    <JobCard />
                    <JobCard />

                </div>
            </div>
        </section>
    );
};

export default UserFeed;