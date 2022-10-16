import LandingNav from "../components/LandingNav";
import cover from '../assets/cover.PNG'
import profile from '../assets/profile.jpg'

const Profile = () => {
    return(
        <>
         <LandingNav 
            path={'profile'}/>
            <section className="bg-background flex px-56 py-4 h-screen">
                <div className="flex w-2/3 rounded-xl bg-white">
                    <div className="relative rounded-t-xl">
                        <img src={cover} height={25} className="rounded-t-xl"/>
                        <div className="absolute rounded-full border left-8 top-32 cursor-pointer">
                            <img src={profile} height={150} width={150} className="rounded-full" />
                        </div>
                    </div>
                </div>            
            </section>
        </>
    );

}

export default Profile;