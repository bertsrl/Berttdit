import React, { useEffect, useState } from "react";

import Card from "./Card";
import Filters from "../elements/Filters";

function Feed({ posts, isLoading }) {
  return (
    <>
      <div className="w-full h-full flex justify-center items-center shrink">
        <div className="feed w-wrap sm:w-[583px] h-full pb-[10%] flex justify-center items-center flex-col wrap">
          <Filters />

          <div>
            {!isLoading ? (
              posts.map((post) => {
                return (
                  <Card
                    subreddit={post.data.subreddit_name_prefixed}
                    title={post.data.title}
                    thumbnail={post.data.thumbnail}
                  />
                );
              })
            ) : (
              <>
                <div>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <div key={index} className="skeleton-card">
                      <div className="h-[2vh]"></div>
                      <div role="status" className="w-[40vw] animate-pulse">
                        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                        <span className="sr-only">Loading...</span>
                      </div>
                      <div className="h-[2vh]"></div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Feed;
