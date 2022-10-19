import React, {useState} from 'react';
import Counter from "./components/counter";
import '../src/styles/App.css';
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript for beginers', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur beatae culpa cupiditate dolor est fuga illo illum inventore ipsa labore laborum maxime, nesciunt nostrum optio unde! Deserunt laudantium quis reiciendis.'},
        {id: 2, title: 'PHP for beginers', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur beatae culpa cupiditate dolor est fuga illo illum inventore ipsa labore laborum maxime, nesciunt nostrum optio unde! Deserunt laudantium quis reiciendis.'},
        {id: 3, title: 'Swift', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur beatae culpa cupiditate dolor est fuga illo illum inventore ipsa labore laborum maxime, nesciunt nostrum optio unde! Deserunt laudantium quis reiciendis.'}
    ])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id ))
    }

    return (
        <div className="App">
            <Counter/>
            <PostForm create={createPost}/>
            <PostList remove={removePost} posts={posts} title='List of ...'/>
        </div>
    );
}

export default App;