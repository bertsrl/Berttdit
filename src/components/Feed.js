import React, { useEffect, useState } from 'react';
import Filters from '../elements/Filters';
import axios from 'axios';
import Card from './Card';

function Feed(props) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        console.log('effect')
        axios
          .get('https://www.reddit.com/r/popular.json')
          .then(response => {
            console.log('promise fulfilled')
            console.log(response.data)
            setPosts(response.data.data.children);
          })
      }, [])
      
      console.log(posts);
    return (
        <div className="w-full h-full flex justify-center items-center"> 
            <div className="feed bg-orange-300 w-[583px] h-full flex items-center flex-col">

                <Filters />
                
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
    );
}

export default Feed;