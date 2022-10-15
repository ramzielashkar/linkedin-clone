import logo from '../assets/logo.svg';
const LandingNav = ()=>{
    return(
        <nav className= "flex px-56 py-6 items-center">
            <div className="font-sans font-bold text-4xl text-primary mr-1">Linked</div>
            <div>
                <img src={logo} alt="" width={35} height={35}/>
            </div>
        </nav>
    );
}

export default LandingNav;