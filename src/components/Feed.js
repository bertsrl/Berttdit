import React, { useEffect, useState } from 'react';
import Filters from '../elements/Filters';
import Card from './Card';

function Feed({ posts }) {
    // const [randomCategories, setRandomCategories] = useState([])

    // useEffect(() => {
    //     const random = () => {
    //         let categories = [];
    //         for(let i=0; i<3; i++) {
    //           const number = Math.floor(Math.random() * posts.length);
    //           categories[i] = posts.filter( (post, index) => index === number ? post.data : "")
    //         }
    //         return categories;
    //       }
    //       setRandomCategories(random);
    // }, [])

    return (
        <>
        
        <div className="w-full h-full flex justify-center items-center shrink"> 
            <div className="feed w-wrap sm:w-[583px] h-full flex justify-center items-center flex-col wrap">

                <Filters />
                
                <div>
                { posts.map(post => {
                    return (
                        <Card 
                            subreddit={post.data.subreddit_name_prefixed}
                            title={post.data.title}
                            thumbnail={post.data.thumbnail} />
                    )
                })}
                </div>
            </div>
        </div>
        </>
    );
}

export default Feed;