import React, { useEffect, useState } from "react";
import Post from "./Post";
import User from "./User";

const Class11 = () => {
    const [users, setUsers] = useState([]);
    const [post, setPost] = useState([]);

    const getUser = async () => {
        const url = "https://jsonplaceholder.typicode.com/users";
        const res = await fetch(url);
        const data = await res.json();
        setUsers(data);
        console.log(data);
    };

    const getPost = async () => {
        const url = "https://jsonplaceholder.typicode.com/posts";
        const res = await fetch(url);
        const data = await res.json();
        const dataSlice = data.slice(0, 5);
        setPost(dataSlice);
        console.log(dataSlice);
    };

    useEffect(() => {
        getUser();
        getPost();
    }, []);

    return (
        <div>
            <User users={users} />
            <Post post={post} />
        </div>
    );
};

export default Class11;
