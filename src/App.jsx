import React, { useState, useEffect, useCallback } from "react";
import Login from "./components/Login.jsx";
import Header from "./components/Header.jsx";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import postReducer from "./reducer";

export const UserContext = React.createContext();
export const PostContext = React.createContext({
  posts: [],
});

function App() {
  const initialPostState = React.useContext(PostContext);
  const [user, setUser] = React.useState("");
  // const [posts, setPosts] = React.useState([]);

  const [state, dispatch] = React.useReducer(postReducer, initialPostState);

  React.useEffect(() => {
    document.title = user === "" ? "Please Login" : `${user}'s Feed`;
  }, [user]);

  // const handleAddPost = useCallback(
  //   function (newPost) {
  //     setPosts([newPost, ...posts]);
  //   },
  //   [posts]
  // );

  if (!user) return <Login setUser={setUser} />;

  return (
    <PostContext.Provider value={{ state, dispatch }}>
      <UserContext.Provider value={user}>
        <Header user={user} setUser={setUser} />
        <CreatePost
          user={user}
          // handleAddPost={handleAddPost}
        />
        <PostList posts={state.posts} />
      </UserContext.Provider>
    </PostContext.Provider>
  );
}

export default App;
