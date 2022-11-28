import React from 'react';
import AppButton from './AppButton';

function Navigation(props) {
    return (
      <div className="navigation fixed top-[83px] bg-orange-200 left-[0px] w-[210px] h-full text-xl flex flex-col p-4 gap-2">
        <i className="text-base flex text-2xl text-dark text-left items-center w-[51px] h-[22px] [-webkit-text-stroke:0.3px_#000]">
            Feeds
        </i>
        <AppButton icon="../vector.svg">Popular</AppButton>
        <i className="text-base flex text-2xl text-dark text-left items-center w-[51px] h-[22px] [-webkit-text-stroke:0.3px_#000]">
            Topics
        </i>
        <AppButton icon="../gameicon.svg">Games</AppButton>
        <AppButton icon="../lighy.svg">Sports</AppButton>
        <AppButton icon="../noteicon.svg">Music</AppButton>
      </div>
    );
}

export default Navigation;