import React, { useEffect, useState } from "react";
import { useUserContext } from "../../store/Context";
import Post from "./Post";

function Feed() {
  const [state, dispatch] = useUserContext();

  return (
    <div className="feed">
      {state.posts.map((post, index) => (
        <Post
          name={post.name}
          imageAva={post.imageAva}
          caption={post.caption}
          timeAgo={post.timeAgo}
          imageUrl={post.imageUrl}
          likes={post.likes}
          comments={post.comments}
          shares={post.shares}
          key={index}
          id={index}
        />
      ))}
    </div>
  );
}

export default Feed;
