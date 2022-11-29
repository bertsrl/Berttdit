
// src/components/SearchList.js

import React from 'react';
import Card from '../components/Card';

function SearchList({ filteredPosts }) {
  const filtered = filteredPosts.map((post,index) =>  <Card key={index} 
                                                            subreddit={post.data.subreddit_name_prefixed}
                                                            title={post.data.title}
                                                            thumbnail={post.data.thumbnail} 
                                                        />
                    ); 
  return (
    <div>
      {filtered}
    </div>
  );
}

export default SearchList;