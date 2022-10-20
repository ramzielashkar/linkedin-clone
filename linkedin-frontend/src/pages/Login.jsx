import Input from "../components/Input";
import LandingNav from "../components/LandingNav";
import { loginUser } from "../query/auth/authorization";
import { QueryClient } from "@tanstack/react-query";
import { useQuery, useMutation, useQueryClient} from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
const Login = () => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isAuthen, setIsAuthen]= useState(false);

    //function to login user
    const {mutate, isLoading} = useMutation(loginUser, {
        onSuccess: (data) =>{
        console.log(data)
         const message = "success"
         queryClient.setQueryData(["CurrentUser"], {...data})
         console.log(queryClient.getQueryData(["CurrentUser"]))
         setIsAuthen(true);
        },
        onError: () => {
         console.log('error')
         },
       onSettled: () => {
         queryClient.invalidateQueries('create');
       }
     })

     const login = async(e) =>{
        e.preventDefault();
        const payload = {
            "email":email,
            "password":password
            }        
         await mutate(payload);

     
     }
     useEffect(()=>{
        if(isAuthen){ 
            const currentUser = queryClient.getQueryData(["CurrentUser"]);
            localStorage.setItem('token', currentUser.data.token);
            console.log(currentUser.data)   
            if(currentUser.data.user.type === 'company'){
                navigate('/company/feed');
            }
            else{
                navigate('/user/feed');
            }
        }
    },[isAuthen]
     )

    return(
        <>
            <LandingNav
                path={'landing'}
            />
            <section className=" flex flex-col items-center py-20">
                <form className="flex flex-col w-1/4 py-4 px-6 shadow-lg" onSubmit={login}>
                    <p className="text-4xl mb-2 font-semibold">Sign in </p>
                    <p className="mb-6">Stay updated on your professional world</p>
                    <Input 
                    path = {'login'}
                    type={'email'}
                    placeholder ={'Email'}
                    onChange = {(e) => setEmail(e.target.value)}
                    />
                    <Input 
                    path = {'login'}
                    type={'password'}
                    placeholder ={'Password'}
                    onChange = {(e) => setPassword(e.target.value)}
                    />
                    <input type="submit" value = "Sign in" className='w-full py-4 text-xl text-center bg-primary rounded-full opacity-80 hover:opacity-100 text-white cursor-pointer mt-6 mb-4'/>

                </form>
            </section>
        </>
    );
}
export default Login;