import React from "react";
import { UserContext } from "../App.jsx";

function PostList({ image, content, user }) {
  const currentUser = React.useContext(UserContext);
  const isCurrentUser = currentUser == user;

  return (
    <React.Fragment>
      {image && (
        <img
          style={{ height: 200, width: 200, objectFit: "cover" }}
          src={URL.createObjectURL(image)}
          alt="Post Cover"
        />
      )}
      <p> {content}</p>
      <div style={{ color: isCurrentUser && "green" }}> by {user}</div>
    </React.Fragment>
  );
}

export default PostList;
