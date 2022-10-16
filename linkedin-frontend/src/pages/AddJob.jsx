import Input from "../components/Input";
import close from '../assets/close.png';
const AddJob = ({open, onClose}) => {
    if(!open){
        return null;
    }else{
    return(
        <>
            <section className="flex flex-col h-screen w-screen bg-popup top-0 fixed z-50 items-center justify-center">
            <form className="flex flex-col w-1/3 bg-white p-6 rounded-lg">
                <div className="flex mb-4 pb-4 border-b-2">
                    <p className="text-xl flex-grow">Add Job </p>
                    <img className='self-end cursor-pointer' src={close} onClick= {onClose} width={30} height={30} />
                </div>
                <form className='flex flex-col'>
                    <div className="flex flex-col w-full gap-3 mb-6">
                        <label className='text-lg font-semibold' htmlFor="">Name</label>
                        <Input 
                        type={'text'}
                        placeholder = {'Job name' }  
                        />
                    </div>
                    <div className="flex flex-col w-full gap-3">
                        <label className='text-lg font-semibold' htmlFor="">Type</label>
                        <Input 
                        type={'text'}
                        placeholder = {'Job type' }  
                        />
                    </div>
                    <div className="flex flex-col w-full gap-3">
                        <label className='text-lg font-semibold' htmlFor="">Description</label>
                        <textarea name="" id="" cols="30" rows="5" className=" border border-gray-800 p-5 " placeholder="Job Description"></textarea>
                    </div>
                    <div className="flex justify-end mt-6">
                    <input type="submit"  className='bg-primary border-none text-white rounded-full p-1 w-36 self-end text-center cursor-pointer' value="Add"/>
                    </div>
                </form>
                
            </form>
        </section>
        </>
    );
}
}
export default AddJob;