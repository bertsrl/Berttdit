import React, { useEffect, useState } from "react";

import AppButton from "./AppButton";

function Card({ subreddit, title, thumbnail }) {
  const [votes, setVotes] = useState(0);
  const [upVote, setUpVote] = useState(false);
  const [downVote, setDownVote] = useState(false);

  useEffect(() => {
    setVotes(Math.floor(Math.random() * (5000 - 100 + 1)) + 10);
  }, []);

  const formatNumber = (num) => {
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}k`;
    }
    return num.toString();
  };

  // Function to handle button click
  const changeVotes = (voteType) => {
    switch (voteType) {
      case "up":
        setVotes(votes + 1);
        setDownVote(false);
        setUpVote(true);
        break;
      case "down":
        setVotes(votes - 1);
        setUpVote(false);
        setDownVote(true);
        break;
    }
  };

  return (
    <div
      className="bg-gray-100 shadow-[4px_4px_4px_rgba(0,_0,_0,_0.25)] [border:1px_solid_#000] box-border w-[350px] sm:w-[533px] overflow-hidden 
    text-base flex flex-row my-5 h-wrap shrink"
    >
      {/* left side feedback */}
      <div className="h-stretch w-wrap bg-orange-400 border-r-1 flex flex-col wrap items-center gap-3 p-3">
        <span>Votes</span>
        <button
          className={`border border-0 rounded-3xl cursor-pointer ${
            upVote ? "bg-white" : "bg-transparent"
          }`}
          onClick={() => changeVotes("up")}
        >
          <img
            className="w-[25px] h-[25px] overflow-hidden"
            alt=""
            src="../iconsaxlineararrowcircleup.svg"
          />
        </button>

        <div className="font-medium text-left inline-block">
          {formatNumber(votes)}
        </div>
        <button
          className={`border border-0 rounded-3xl cursor-pointer ${
            downVote ? "bg-white" : "bg-transparent"
          }`}
          onClick={() => changeVotes("down")}
        >
          <img
            className="w-[24px] h-[24px] overflow-hidden"
            alt=""
            src="../iconsaxlineararrowcircledown.svg"
          />
        </button>
      </div>

      {/* Post */}
      <div
        className="post bg-orange-400 flex flex-col wrap w-full
         py-1"
      >
        {/* breadcrumbs */}
        <div className="breadcrumbs flex flex-row w-full items-center gap-5 m-1">
          <div className="flex items-center">
            <img
              className="w-[25px] h-[25px] overflow-hidden"
              alt=""
              src="../iconsaxlinearandroid.svg"
            />
            <div className="font-medium text-left inline-block">{` ${subreddit} • Posted by user 1 hour ago  `}</div>
          </div>
        </div>

        {/* content */}
        <div className="flex flex-col wrap m-3 gap-4 max-sm:w-[260px]">
          <div className="text-[16px] font-medium text-left flex items-center w-full">
            {title}
          </div>
          {thumbnail !== "self" &&
            thumbnail !== "default" &&
            thumbnail !== "" && (
              <img
                className="w-[100%] h-[100%] overflow-hidden object-cover"
                alt=""
                src={thumbnail}
              />
            )}

          <div className="flex flex-row w-full">
            <AppButton icon="../iconsaxlinearmessage.svg">Comments</AppButton>
            <AppButton icon="../iconsaxlinearshare.svg">Share</AppButton>
            <AppButton icon="../iconsaxlinearsave2.svg">Save</AppButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
