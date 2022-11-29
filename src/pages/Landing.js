import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Feed from '../components/Feed';
import SearchBar from '../components/SearchBar';

const Landing = () => {
  const [posts, setPosts] = useState([]);
  const [searchField, setSearchField] = useState("");

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
        setSearchField(e.target.value);
      };

  return (
    <>
    <div className="relative bg-orange-200 w-full h-wrap overflow-hidden text-center text-2xl text-black font-inter">

      <SearchBar handleChange={handleChange} />

      <Feed posts={filteredPosts} />

    </div>
    <div className="absolute permanent w-full h-full bg-orange-200" />
    </>
  );
};

export default Landing;
