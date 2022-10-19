import React from 'react';
import MyButton from "./UI/button/MyButton";

const PostItem = (props) => {
    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.number}. {props.items.title}</strong>
                <div>
                    {props.items.description}
                </div>
            </div>
            <div className="post__button" style={{whiteSpace: 'nowrap'}}>
                <MyButton onClick={() => props.remove(props.items)}>
                    Delete post
                </MyButton>
            </div>
        </div>
    );
};

export default PostItem;