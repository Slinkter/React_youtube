import axios from "axios";
import React, { useEffect, useState } from "react";
// class 15 : 2:01:58
// npm i axios

const Class09 = () => {
    const [data, setData] = useState([]);
    const [name, setName] = useState("");

    const postData = () => {
        const url = "";
        const obj = { name: name, age: 26, hobbie: ["a", "b", "c"] };
        axios
            .post(url, obj)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.error(err);
            });
    };
    const getData = () => {
        const url = "http://dominioapi.com/users";
        axios
            .get(url)
            .then((res) => {
                setData(res.data);
                console.log(res.data);
            })
            .catch((err) => {
                console.error(err);
            });
    };
    const updateData = (id) => {
        const url = `http://dominioapi.com/users/${id}`;
        const obj = { name: name, age: 26, hobbie: ["a", "b", "c", "d", "e"] };
        axios
            .put(url, obj)
            .then((res) => {
                getData();
                console.log(res.data);
            })
            .catch((err) => {
                console.error(err);
            });
    };
    const deleteData = (id) => {
        const url = `http://dominioapi.com/users/${id}`;
        axios
            .delete(url)
            .then((res) => {
                getData();
                console.log(res.data);
            })
            .catch((err) => {
                console.error(err);
            });
    };

    useEffect(() => {
        getData();
        return () => {};
    }, []);

    return (
        <div>
            <input type="text" onChange={(e) => setName(e.target.value)} />
            <button onClick={postData}> Send Data</button>

            <br />
            {data.map((item) => {
                return (
                    <div>
                        <h2>{item.name}</h2>
                        <button onClick={() => updateData(item.id)}>
                            update
                        </button>
                        <button onClick={() => deleteData(item.id)}>
                            delete
                        </button>
                    </div>
                );
            })}
        </div>
    );
};

export default Class09;
