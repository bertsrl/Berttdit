import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Feed from '../components/Feed';
import SearchBar from '../components/SearchBar';

const Landing = () => {
  const [searching, setSearching] = useState(false);
  const [posts, setPosts] = useState([]);
  const [searchField, setSearchField] = useState("");

    useEffect(() => {
        axios
          .get('https://www.reddit.com/r/popular.json')
          .then(response => {
            setPosts(response.data.data.children);
          })
      }, [])

      const filteredPosts = 
      searchField !== ""
      ? posts.filter(
        post => {
          return (
            post
            .data
            .subreddit_name_prefixed
            .toLowerCase()
            .includes(searchField.toLowerCase()) ||
            post
            .data
            .title  
            .toLowerCase()
            .includes(searchField.toLowerCase())
          );
        }
      )
      : posts
    
      const handleChange = e => {
        if(e.target.value === "") setSearching(false);
        else {
          setSearchField(e.target.value);
          setSearching(true);
        }
      };

  return (
    <>
    <div className="relative bg-orange-200 w-full h-wrap overflow-hidden text-center text-2xl text-black font-inter">

      <SearchBar handleChange={handleChange} />

      <Feed posts={filteredPosts} />

    </div>
    <div className={`absolute permanent w-full ${ searching ? "h-full" : "h-wrap" } bg-orange-200`} />
    </>
  );
};

export default Landing;
