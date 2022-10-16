import logo from '../assets/logo.svg';
import home from '../assets/home.png';
import profile from '../assets/profile.jpg'
const LandingNav = ({path})=>{
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
            <nav className= "flex px-56 py-3 items-center">
                <div>
                    <img src={logo} alt="" width={35} height={35}/>
                </div>
                <input type="text" placeholder='Search' className='ml-2 px-4 rounded-sm py-1 border bg-secondary w-1/4' />
                <div className='flex justify-end gap-9 w-1/2'>
                    <div className='flex flex-col items-center cursor-pointer'>
                        <img src={home} alt="" width={25} height= {20} />
                        <p className='text-sm mt-1'>Home</p>
                    </div>
                    <div className='flex flex-col items-center cursor-pointer'>
                        <img src={profile} alt="" width={25} height= {20} />
                        <p className='text-sm mt-1'>Me</p>
                    </div>
                </div>
            </nav>
        );
    }
}

export default LandingNav;