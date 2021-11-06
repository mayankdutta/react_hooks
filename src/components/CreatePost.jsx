import React, { useState, useRef } from "react";

function CreatePost({ user, handleAddPost }) {
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const imageInputRef = React.useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const post = { content, image, user };
    handleAddPost(post);
    setContent("");
    imageInputRef.current.value = "";
  };

  return (
    <div>
      <h1> Create post</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add post content"
          onChange={(event) => setContent(event.target.value)}
          value={content}
        />
        <input
          type="file"
          onChange={(event) => setImage(event.target.files[0])}
          ref={imageInputRef}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreatePost;
