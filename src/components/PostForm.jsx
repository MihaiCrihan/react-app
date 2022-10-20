import React, { useState } from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: "", description: "" });

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };
    create(newPost);
    setPost({ title: "", description: "" });
  };

  return (
    <form style={{ display: "flex", flexFlow: "column" }}>
      {/*Управляеммый компонент*/}
      <MyInput
        type="text"
        placeholder="Name"
        onChange={(event) => setPost({ ...post, title: event.target.value })}
        value={post.title}
      />
      <MyInput
        type="text"
        placeholder="Description"
        onChange={(event) =>
          setPost({ ...post, description: event.target.value })
        }
        value={post.description}
      />
      <MyButton onClick={addNewPost}> Add new ...</MyButton>
    </form>
  );
};

export default PostForm;
