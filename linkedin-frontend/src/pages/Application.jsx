import { useState } from 'react';
import close from '../assets/close.png'
const Application = ({open, onClose}) => {
    const [selectedFile, setSelectedFile] = useState('');

    const selectFile = (e)=>{
    const [file] = e.target.files;
    console.log(file);
    setSelectedFile(file.name);
    }
    if(!open){
        return null;
    }else{
    return(
        
        <section className="flex flex-col h-screen w-screen bg-popup top-0 fixed z-50 items-center justify-center">
            <form className="flex flex-col w-1/3 bg-white p-6 rounded-lg">
                <div className="flex mb-4 pb-4 border-b-2">
                <p className="text-xl flex-grow">Apply to Company </p>
                <img className='self-end cursor-pointer' src={close} onClick={onClose} alt="" width={30} height={30} />
                </div>
                <div className='mb-4'>
                    {selectedFile}
                </div>
                <div className="flex justify-between">
                    <label htmlFor="cv" className='bg-primary border-none text-white rounded-full p-1 w-36 self-start text-center cursor-pointer'>Upload CV</label>
                    <input className = " hidden" id = 'cv' type="file" onChange={selectFile} />
                    <input type="submit"  className='bg-primary border-none text-white rounded-full p-1 w-36 self-end text-center cursor-pointer' value="Apply"/>
                </div>
                
            </form>
        </section>
    );
    }
}
export default Application;