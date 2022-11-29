import React from 'react';
import AppButton from '../components/AppButton';

function Filters(props) {
    return (
        <div className="h-[5.96%] w-[335px] sm:w-[550px] m-5 rounded-[45px] bg-orange-400 shadow-[4px_4px_4px_rgba(0,_0,_0,_0.25)] [border:1px_solid_#000] box-border flex flex-row items-center p-3 gap-3">
            <AppButton bgcolor="white" icon="../vector1.svg">Hot</AppButton>
            <AppButton icon="../star.svg">New</AppButton>
            <AppButton icon="../arrowup.svg">Top</AppButton>
        </div>
    );
}

export default Filters;