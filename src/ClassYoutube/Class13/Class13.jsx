//  Search text input array
import React, { useEffect, useState } from "react";
import "./Class13.css";

const Class13 = () => {
    const [users, setUsers] = useState([]);
    const [inputText, setInputText] = useState("");
    const [searchedItems, setSearchedItems] = useState([]);

    const getData = async () => {
        const url = "https://jsonplaceholder.typicode.com/users";
        const response = await fetch(url);
        const data = await response.json();
        setUsers(data);
        console.log(data);
    };

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        if (inputText) {
            setTimeout(() => {
                const usersFilter = users.filter((user) => {
                    return Object.values(user)
                        .join()
                        .toLowerCase()
                        .includes(inputText.toLowerCase());
                });

                setSearchedItems(usersFilter);
            }, 1000);
        } else {
            setSearchedItems(users);
        }
    }, [inputText]);

    return (
        <div>
            <input
                type="text"
                className="search"
                onChange={(e) => setInputText(e.target.value)}
            />
            <div className="grid-main">
                {inputText.length > 0
                    ? searchedItems.map((user) => {
                          return (
                              <div key={user.id} className="grid-child">
                                  <h2>{user.name}</h2>
                                  <p>{user.username}</p>
                              </div>
                          );
                      })
                    : users.map((user) => {
                          return (
                              <div key={user.id} className="grid-child">
                                  <h2>{user.name}</h2>
                                  <p>{user.username}</p>
                              </div>
                          );
                      })}
            </div>
        </div>
    );
};

export default Class13;
