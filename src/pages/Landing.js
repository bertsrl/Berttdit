import React, { useEffect, useState } from "react";

import Feed from "../components/Feed";
import SearchBar from "../components/SearchBar";
import axios from "axios";

const Landing = () => {
  const [searching, setSearching] = useState(false);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    axios
      .get("https://www.reddit.com/r/popular.json")
      .then((response) => {
        console.log(response.data.data.children);
        setPosts(response.data.data.children);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error("Error fetching the posts:", error);
        setLoading(false); // Even if there's an error, stop loading
      });
  }, []);

  const filteredPosts =
    searchField !== ""
      ? posts.filter((post) => {
          return (
            post.data.subreddit_name_prefixed
              .toLowerCase()
              .includes(searchField.toLowerCase()) ||
            post.data.title.toLowerCase().includes(searchField.toLowerCase())
          );
        })
      : posts;

  const handleChange = (e) => {
    setSearchField(e.target.value);
    setSearching(true);
  };

  return (
    <>
      <div className="relative bg-orange-200 w-full h-wrap overflow-hidden text-center text-2xl text-black font-inter">
        <SearchBar handleChange={handleChange} />

        <Feed posts={filteredPosts} isLoading={loading} />
      </div>
      <div
        className={`absolute permanent w-full ${
          searching ? "h-full" : "h-wrap"
        } bg-orange-200`}
      />
    </>
  );
};

export default Landing;
