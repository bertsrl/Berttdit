import React from 'react';
import AppButton from './AppButton';

function SearchBar(props) {
    return (
      <div className="search fixed bg-orange-200 w-full h-[83px] text-orange-100 font-antic flex flex-row justify-center items-center space-x-[23.5%]">

        {/* <Insert Logo> */}
        <img
            className="w-[150px] h-[70px] overflow-hidden flex justify-self-start"
            alt="logo"
            src="../logo.png" />
        
        {/* SearchBar */}
        <form className="flex self-center">
            <input placeholder="Search.." className="ceva1 px-5 rounded-[45px] bg-white w-[463px] h-[34px]" />
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