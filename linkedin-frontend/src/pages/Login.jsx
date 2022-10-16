import Input from "../components/Input";
import LandingNav from "../components/LandingNav";

const Login = () => {
    return(
        <>
            <LandingNav
                path={'login'}
            />
            <section className=" flex flex-col items-center py-20">
                <div className="flex flex-col w-1/4 py-4 px-6 shadow-lg">
                    <p className="text-4xl mb-2 font-semibold">Sign in </p>
                    <p className="mb-6">Stay updated on your professional world</p>
                    <Input 
                    path = {'login'}
                    type={'email'}
                    placeholder ={'Email'}/>
                    <Input 
                    path = {'login'}
                    type={'password'}
                    placeholder ={'Password'}/>
                    <input type="submit" value = "Sign in" className='w-full py-4 text-xl text-center bg-primary rounded-full opacity-80 hover:opacity-100 text-white cursor-pointer mt-6 mb-4'/>

                </div>
            </section>
        </>
    );
}
export default Login;