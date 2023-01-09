import React from "react";
import HigherOrder from "./HigherOrder";

const Post = (props) => {
    const { data } = props;
    return (
        <ul>
            {data.slice(0, 5).map((item) => {
                return <li key={item.id}>{item.title}</li>;
            })}
        </ul>
    );
};

const PostComp = HigherOrder("Posts", Post, "posts");

export default PostComp;
