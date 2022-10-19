import React from 'react';

const PostItem = (props) => {
    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.number}. {props.items.title}</strong>
                <div>
                    {props.items.description}
                </div>
            </div>
            <button className="post__button">
                Delete post
            </button>
        </div>
    );
};

export default PostItem;