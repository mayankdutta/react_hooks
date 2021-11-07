import React from "react";
import { UserContext } from "../App.jsx";

function Post({ image, content, user, id }) {
  const currentUser = React.useContext(UserContext);
  const isCurrentUser = currentUser == user;

  return (
    <>
      {image && (
        <img
          style={{ height: 200, width: 200, objectFit: "cover" }}
          src={URL.createObjectURL(image)}
          alt="Post Cover"
        />
      )}
      <p> {content}</p>
      <div style={{ color: isCurrentUser && "green" }}> by {user}</div>
    </>
  );
}

export default Post;
