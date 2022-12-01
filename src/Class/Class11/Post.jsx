import React from "react";
import HigherOrder from "./HigherOrder";

const Post = (props) => {
    const { data } = props;
    return (
        <div>
            <ul>
                {data.slice(0, 5).map((item) => {
                    return <li key={item.id}>{item.title}</li>;
                })}
            </ul>
        </div>
    );
};

const PostComp = HigherOrder("Posts", Post, "posts");

export default PostComp;
