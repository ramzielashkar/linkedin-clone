import { useState } from 'react';
import close from '../assets/close.png'
import Input from '../components/Input';
const EditProfile = ({open, onClose})=>{
    if(!open){
        return null
    }
    else{
    return(
        <>
            <section className="flex flex-col h-screen w-screen bg-popup top-0 fixed z-50 items-center justify-center">
            <form className="flex flex-col w-1/3 bg-white p-6 rounded-lg">
                <div className="flex mb-4 pb-4 border-b-2">
                    <p className="text-xl flex-grow">Edit Profile </p>
                    <img className='self-end cursor-pointer' src={close} onClick= {onClose} width={30} height={30} />
                </div>
                <form className='flex flex-col'>
                    <div className="flex flex-col w-full gap-3 mb-6">
                        <label className='text-lg font-semibold' htmlFor="">Name</label>
                        <Input 
                        type={'text'}
                        placeholder = {'Ramzi El Ashkar' }  
                        />
                    </div>
                    <div className="flex flex-col w-full gap-3">
                        <label className='text-lg font-semibold' htmlFor="">Bio</label>
                        <Input 
                        type={'text'}
                        placeholder = {'Bio' }  
                        />
                    </div>
                    <div className="flex justify-end mt-6">
                    <input type="submit"  className='bg-primary border-none text-white rounded-full p-1 w-36 self-end text-center cursor-pointer' value="Save"/>
                    </div>
                </form>
                
            </form>
        </section>
        </>
    );
    }
}
export default EditProfile;