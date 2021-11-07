import React from "react";
import Post from "./Post";

function PostList({ posts }) {
  return posts.map((post, index) => <Post key={post.id} {...post} />);
}

export default PostList;
