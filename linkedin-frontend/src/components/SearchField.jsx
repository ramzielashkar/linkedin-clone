const SearchField = ({open}) =>{
    if(!open){
        return null;
    }else{
    return (
        <>
            <div className="bg-white w-96 flex flex-col absolute top-12 py-4 px-4 rounded-md z-10">
                <div className="flex">

                </div>
            </div>
        </>
    );

}
}
export default SearchField;