import React from 'react';

function SearchBar({ handleChange }) {
    return (
      <div className="search fixed bg-orange-200 w-full h-[83px] text-orange-100 font-antic flex flex-row justify-center items-center
      mr-[20px] gap-x-[25px]">

        {/* Logo */}
        <img
            className="w-[200px] h-[70px] overflow-hidden flex justify-self-start"
            alt="logo"
            src="../logo.png" />
        
        {/* SearchBar */}
        <form className="flex justify-center items-center w-[350px]">
            <input 
                placeholder="Search.." 
                className="ceva1 px-5 rounded-[45px] bg-white sm:w-[463px] h-[34px]" 
                onChange = {handleChange} />
        </form>
    
      </div>
    );
}

export default SearchBar;