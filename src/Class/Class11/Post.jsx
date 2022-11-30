import React from "react";

const Post = (props) => {
    const { post } = props;
    return (
        <div>
            <ul>
                {post.map((item) => {
                    return <li key={item.id}>{item.title}</li>;
                })}
            </ul>
        </div>
    );
};

export default Post;
