import React from 'react';
import AppButton from './AppButton';

function SearchBar({ handleChange }) {
    return (
      <div className="search fixed bg-orange-200 w-full h-[83px] text-orange-100 font-antic flex flex-row justify-center items-center
      mr-[20px] space-x-[25%]">

        {/* Logo */}
        <img
            className="w-[10%] h-[70px] overflow-hidden flex justify-self-start"
            alt="logo"
            src="../logo.png" />
        
        {/* SearchBar */}
        <form className="flex justify-center items-center w-[350px]">
            <input 
                placeholder="Search.." 
                className="ceva1 px-5 rounded-[45px] bg-white sm:w-[463px] h-[34px]" 
                onChange = {handleChange} />
        </form>
        
        <div className="buttons flex flex-row gap-4" >
             {/* Login Button */}
            <AppButton bgcolor="orange">Login</AppButton>

            {/* SignUp Button */}
            <AppButton bgcolor="white">Sign Up</AppButton>
        </div>
      </div>
    );
}

export default SearchBar;