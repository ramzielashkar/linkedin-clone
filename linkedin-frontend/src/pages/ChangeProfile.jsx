import { useState } from 'react';
import close from '../assets/close.png'
import Input from '../components/Input';
import profile from '../assets/profile.jpg'

const ChangeProfile = ({open, onClose})=>{
    const [img, setImg] = useState(profile);
    const [base64, setBase64]= useState('');
   
 //function to convert image to base64
 const getBase64 = (file, callBack) =>{
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
        callBack(reader.result)
    };
    reader.onerror = function (error) {
        console.log('Error: ', error);
  }
}
    // get chosen image
    const onImageChange = (e) => {
      const [file] = e.target.files;
      setImg(URL.createObjectURL(file));
      getBase64(file, (result) => {
        setBase64(result);
      });
    };
    if(!open){
        return null
    }
    else{
    return(
        <>
            <section className="flex flex-col h-screen w-screen bg-popup top-0 fixed z-50 items-center justify-center">
            <form className="flex flex-col w-1/3 bg-blackpopup p-6 rounded-lg">
                <div className="flex mb-4 pb-4 border-b-2">
                    <p className="text-xl flex-grow text-white">Profile Picture </p>
                    <img className='self-end cursor-pointer ' src={close} onClick= {onClose} width={30} height={30} />
                </div>
                <form className='flex flex-col'>
                    <div className="flex h-80 w-auto justify-center">
                        <img src={img} height={200}/>
                    </div>
                    <div className="flex justify-end gap-2 mt-6">
                    <label htmlFor="cv" className='bg-primary border-none text-white rounded-full p-1 w-36 self-start text-center cursor-pointer'>Change Profile</label>
                    <input className = " hidden" id = 'cv' type="file"onChange={onImageChange} />
                    <input type="submit"  className='bg-primary border-none text-white rounded-full p-1 w-36 self-end text-center cursor-pointer' value="Save"/>
                    </div>
                </form>
                
            </form>
        </section>
        </>
    );
    }
}
export default ChangeProfile;