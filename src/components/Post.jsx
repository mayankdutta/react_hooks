import React from "react";

function PostList({ image, content, user }) {
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
      <div> by {user}</div>
    </React.Fragment>
  );
}

export default PostList;
