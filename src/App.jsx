import React, { useState, useEffect } from "react";
import Login from "./components/Login.jsx";
import Header from "./components/Header.jsx";
import CreatePost from "./components/CreatePost";

function App() {
  const [user, setUser] = React.useState("");
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    document.title = user === "" ? "Please Login" : `${user}'s Feed`;
  }, [user]);

  if (!user) return <Login setUser={setUser} />;

  return (
    <>
      <Header user={user} setUser={setUser} />
      <CreatePost user={user} posts={posts} setPosts={setPosts} />
      {posts.map((post, index) => (
        <React.Fragment key={index}>
          {post.image && (
            <img
              style={{ height: 200, width: 200, objectFit: "cover" }}
              src={URL.createObjectURL(post.image)}
              alt="Post Cover"
            />
          )}
          <p> {post.content}</p>
          <div> by {post.user}</div>
        </React.Fragment>
      ))}
    </>
  );
}

export default App;
