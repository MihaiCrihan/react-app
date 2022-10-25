import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";import About from "./pages/About";
import Posts from "./pages/Posts";

const App = () => {
  return (
    <BrowserRouter>
        <h1 style={{textAlign: 'center', fontSize: '70px'}}>Video 2h17m45s</h1>

        <div className="navbar">
            <div className="navbar__items">
                <a href="/about">About</a>
                <a href="/posts">Posts</a>
            </div>
        </div>
      <Routes>
          <Route path="/about" element={<About/>}/>
          <Route path="/posts" element={<Posts/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
