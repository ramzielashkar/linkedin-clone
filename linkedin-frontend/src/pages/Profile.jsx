import LandingNav from "../components/LandingNav";
import cover from '../assets/cover.PNG'
import profile from '../assets/profile.jpg'
import edit from '../assets/edit.png'
import EditProfile from "./EditProfile";
import { useState } from "react";


const Profile = () => {
    const [showEdit, setShowEdit] = useState(false);
    const openEdit = () => {
        setShowEdit(true);
    }
    const closeEdit = () => {
        setShowEdit(false);
    }
    return(
        <>
         <LandingNav 
            path={'profile'}/>
            <section className="bg-background flex px-56 py-4 h-screen">
                <div className="flex flex-col w-2/3 rounded-xl bg-white h-128">
                    <div className="relative rounded-t-xl">
                        <img src={cover} height={25} className="rounded-t-xl"/>
                        <div className="absolute rounded-full border left-8 top-32 cursor-pointer">
                            <img src={profile} height={150} width={150} className="rounded-full" />
                        </div>
                    </div>
                    <div className="flex justify-end pr-4 mt-4 cursor-pointer" onClick={openEdit}>
                        <img src={edit} height={35} width ={35}/>
                    </div> 
                    <div className="flex flex-col px-10 mt-11">
                        <p className="text-2xl font-semibold">Ramzi El Ashkar</p>
                        <p className="mt-2">Web Developer</p>
                    </div>
                </div> 
                <div className="flex flex-col bg-white rounded-xl w-1/5 ml-8 h-14 items-center justify-center ">
                    <div className="text-lg font-semibold cursor-pointer hover:underline">Logout as Ramzi El Ashkar</div>
                </div>
                          
            </section>
            <EditProfile 
            open = {showEdit}
            onClose = {closeEdit} />
        </>
    );

}

export default Profile;