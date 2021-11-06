import React, { useState, useEffect } from "react";
import Login from "./components/Login.jsx";
import Header from "./components/Header.jsx";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";

function App() {
  const [user, setUser] = React.useState("");
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    document.title = user === "" ? "Please Login" : `${user}'s Feed`;
  }, [user]);

  function handleAddPost(newPost) {
    setPosts([newPost, ...posts]);
  }

  if (!user) return <Login setUser={setUser} />;

  return (
    <>
      <Header user={user} setUser={setUser} />
      <CreatePost user={user} handleAddPost={handleAddPost} />
      <PostList posts={posts} />
    </>
  );
}

export default App;
