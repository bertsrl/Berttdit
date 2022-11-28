import React from 'react';

function AppButton({ bgcolor, children, icon, ...props }) {
    return (
        <>
            { 
            bgcolor === "white" && 
            <a className="[text-decoration:none] cursor-pointer">
                <div className="rounded-[45px] bg-white shadow-[4px_4px_4px_rgba(0,_0,_0,_0.25)] w-[100px] h-[35px] flex justify-center items-center">
                    <div className="tracking-[0.14em] leading-[118.1%] inline-block [-webkit-text-stroke:1px_#e4a706] flex flex-row justify-center items-center gap-2">
                        {
                        icon && 
                        <img
                            className="w-[30px] h-[18px]"
                            alt=""
                            src={icon}
                        />
                        }
                        { children }
                    </div>
                </div>  
            </a>
            }

            {
            bgcolor === "orange" && 
            <a className="[text-decoration:none] cursor-pointer">
            <div className="rounded-[45px] bg-orange-200 shadow-[4px_4px_4px_rgba(0,_0,_0,_0.25)] w-[100px] h-[35px] flex justify-center items-center">
                <div className="tracking-[0.14em] leading-[118.1%] text-white inline-block [-webkit-text-stroke:1px_#fff] flex flex-row justify-center items-center gap-2">
                    {
                    icon && 
                    <img
                        className="w-full h-full"
                        alt=""
                        src={icon}
                    />
                    }
                    { children }
                </div>
            </div> 
            </a>
            }

            {
            !bgcolor && 
            <>
             <a className="[text-decoration:none] cursor-pointer">
                <div className="hover:bg-orange-200 rounded-[45px] tracking-[0.14em] leading-[118.1%] text-black italic inline-block flex flex-row justify-center items-center w-[100px] h-[35px]">
                    {
                    icon && 
                    <img
                        className="w-[30px] h-[18px]"
                        alt=""
                        src={icon}
                    />
                    }
                    { children }
                </div>
            </a>
            </>
            }
        </>
    );
}

export default AppButton;