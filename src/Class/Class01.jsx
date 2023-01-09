import React, { useEffect, useState } from "react";

const Class01 = () => {
    const url = "https://jsonplaceholder.typicode.com/users";

    const [users, setUsers] = useState([]);
    const [number, setNumber] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    /*  
        const getDataV1 = async () => {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    };
    */
    const getDataV2 = () => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => setUsers(data))
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        /*   
        getDataV1();
         */
        getDataV2();

        return () => {};
    }, []);

    const btnSearchFilter = () => {
        let filterData = users.filter((user) => {
            return user.id <= 5; /* return user.name === "Leanne Graham"; */
        });
        setUsers(filterData);
    };

    const mapNumberData = () => {
        let filterNumber = number
            .map((num) => {
                return num * num;
            })
            .filter((num) => {
                return num <= 10;
            });
        setNumber(filterNumber);
    };

    return (
        <div className="App">
            <h1>Users</h1>
            <div className="card">
                {users.map((user) => (
                    <div className="card-inner">
                        <p>{user.name}</p>
                        <p>{user.username}</p>
                    </div>
                ))}
                <button onClick={btnSearchFilter}>show filter</button>
            </div>
            <h1>Number</h1>
            <div className="card">
                {number.map((num) => (
                    <div className="card-inner">{num}</div>
                ))}
                <button onClick={mapNumberData}>show filter</button>
            </div>

            <pre>{JSON.stringify(users, null, 2)}</pre>
        </div>
    );
};

export default Class01;
