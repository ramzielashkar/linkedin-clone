import logo from '../assets/logo.svg';
import home from '../assets/home.png';
import profile from '../assets/profile.jpg'
import { useState } from 'react';
import SearchField from './SearchField';
import { useNavigate } from "react-router-dom";

const LandingNav = ({path})=>{
    const navigate = useNavigate();
    const [search, setSearch] = useState(false);
    const searchJob = () =>{
        setSearch(!search);
    }

    const openProfile = () =>{
        navigate('../profile');
    }
    const openHome = () =>{
        navigate('../feed');
    }
    if(path==='landing'){
    return(
        <nav className= "flex px-56 py-6 items-center">
            <div className="font-sans font-bold text-4xl text-primary mr-1">Linked</div>
            <div>
                <img src={logo} alt="" width={35} height={35}/>
            </div>
        </nav>
    );
    }else if(path==='feed'){
        return(
            <>
            <nav className= "flex px-56 py-1 items-center">
                <div>
                    <img src={logo} alt="" width={35} height={35}/>
                </div>
                <input type="text" placeholder='Search' className='ml-2 px-4 rounded-sm py-1 border bg-secondary w-1/4' onFocus={searchJob} />
                <div className='flex justify-end gap-9 w-1/2'>
                    <div className='flex flex-col items-center cursor-pointer border-b-2 border-black px-4'>
                        <img src={home} alt="" width={25} height= {20} />
                        <p className='text-sm mt-1'>Home</p>
                    </div>
                    <div className='flex flex-col items-center cursor-pointer px-4' onClick={openProfile}>
                        <img src={profile} alt="" width={25} height= {20} />
                        <p className='text-sm mt-1'>Me</p>
                    </div>
                </div>
                <SearchField 
                open ={search}
                 />
            </nav>
            </>
        );
    }
    else if(path==='profile'){
        return(
            <>
            <nav className= "flex px-56 py-1 items-center">
                <div>
                    <img src={logo} alt="" width={35} height={35}/>
                </div>
                <input type="text" placeholder='Search' className='ml-2 px-4 rounded-sm py-1 border bg-secondary w-1/4' onFocus={searchJob} />
                <div className='flex justify-end gap-9 w-1/2'>
                    <div className='flex flex-col items-center cursor-pointer px-4 ' onClick={openHome}>
                        <img src={home} alt="" width={25} height= {20} />
                        <p className='text-sm mt-1'>Home</p>
                    </div>
                    <div className='flex flex-col items-center cursor-pointer border-b-2 border-black px-4' onClick={openProfile}>
                        <img src={profile} alt="" width={25} height= {20} />
                        <p className='text-sm mt-1'>Me</p>
                    </div>
                </div>
            </nav>
            </>
        );
    }
}

export default LandingNav;