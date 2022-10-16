import { Outlet } from "react-router-dom";
import LandingNav from "../components/LandingNav";

const User = () =>{
    return (
        <>
            <LandingNav 
            path={'feed'}/>
            <Outlet />
        </>
    );
};

export default User;
