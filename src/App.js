import React, {useState} from 'react';
import Counter from "./components/counter";
import '../src/styles/App.css';
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {

    const [posts, setPost] = useState([
        {id: 1, title: 'Javascript for beginers', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur beatae culpa cupiditate dolor est fuga illo illum inventore ipsa labore laborum maxime, nesciunt nostrum optio unde! Deserunt laudantium quis reiciendis.'},
        {id: 2, title: 'PHP for beginers', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur beatae culpa cupiditate dolor est fuga illo illum inventore ipsa labore laborum maxime, nesciunt nostrum optio unde! Deserunt laudantium quis reiciendis.'},
        {id: 3, title: 'Swift', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur beatae culpa cupiditate dolor est fuga illo illum inventore ipsa labore laborum maxime, nesciunt nostrum optio unde! Deserunt laudantium quis reiciendis.'}
    ])

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            id: Date.now(),
            title,
            description
        }
        setPost([...posts, newPost])
        setTitle('')
        setDescription('')
    }

    return (
        <div className="App">
            <Counter/>
            <form>
                {/*Управляеммый компонент*/}
                <MyInput
                    type="text"
                    placeholder='Name'
                    onChange={event => setTitle(event.target.value)}
                    value={title}
                />
                <MyInput
                    type="text"
                    placeholder='Description'
                    onChange={event => setDescription(event.target.value)}
                    value={description}
                />
                <MyButton onClick={addNewPost} > Add new ...</MyButton>
            </form>
            <PostList posts={posts} title={'List of ...'}/>
        </div>
    );
}

export default App;