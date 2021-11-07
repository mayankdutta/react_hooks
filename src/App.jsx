import React from "react";
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
  const [state, dispatch] = React.useReducer(
    postReducer, // function
    React.useContext(PostContext) // initial state, i.e. posts
  );
  const [user, setUser] = React.useState("");

  React.useEffect(() => {
    document.title = user === "" ? "Please Login" : `${user}'s Feed`;
  }, [user]);

  if (!user) {
    return <Login setUser={setUser} />;
  }

  return (
    <PostContext.Provider value={{ state, dispatch }}>
      <UserContext.Provider value={user}>
        <Header user={user} setUser={setUser} />
        <CreatePost user={user} />
        <PostList posts={state.posts} />
      </UserContext.Provider>
    </PostContext.Provider>
  );
}

export default App;
