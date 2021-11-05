import React, { useState } from "react";

function CreatePost({ user, posts, setPosts }) {
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const post = { content, image, user };
    setPosts([post, ...posts]);
    setContent("");
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
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreatePost;
