import React, { useMemo, useState } from "react";
import Counter from "./components/counter";
import "../src/styles/App.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/modal/MyModal";
import MyButton from "./components/UI/button/MyButton";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Javascript for beginers",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur beatae culpa cupiditate dolor est fuga illo illum inventore ipsa labore laborum maxime, nesciunt nostrum optio unde! Deserunt laudantium quis reiciendis.",
    },
    {
      id: 2,
      title: "PHP for beginers",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur beatae culpa cupiditate dolor est fuga illo illum inventore ipsa labore laborum maxime, nesciunt nostrum optio unde! Deserunt laudantium quis reiciendis.",
    },
    {
      id: 3,
      title: "Swift",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur beatae culpa cupiditate dolor est fuga illo illum inventore ipsa labore laborum maxime, nesciunt nostrum optio unde! Deserunt laudantium quis reiciendis.",
    },
  ]);

  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false)

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const sortedPost = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPost.filter((posts) =>
      posts.title.toLowerCase().includes(filter.query)
    );
  }, [filter.query, sortedPost]);

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <MyButton onClick={() => setModal(true)} >
        Open Modal
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      {/*<hr style={{ margin: "15px 0" }} />*/}

      <h1 style={{textAlign: 'center', fontSize: '70px'}}>Video 1h30m</h1>

      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title="List of Posts"
      />
    </div>
  );
}

export default App;
