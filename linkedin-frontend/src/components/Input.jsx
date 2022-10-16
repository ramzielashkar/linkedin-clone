const Input = ({type, placeholder, onChange, path, title, pattern}) => {
    if(path=='sigin'){
    return(
        <>
            <input className="px-3 rounded-sm py-3 border w-4/5 border-black border-opacity-90 text-lg text-black mb-4" type={type} placeholder={placeholder} onChange = {onChange}
            pattern={pattern} title ={title}
            ></input>
        </>
    );
    }else{
        return(
            <>
                <input className="px-3 rounded-sm py-3 border w-full border-black border-opacity-90 text-lg text-black mb-4" type={type} placeholder={placeholder} onChange = {onChange}></input>
            </>
        );
    }
}

export default Input