import { useEffect, useState } from "react";

function HigherOrder(title, Component, nameRequest) {
    return function HOC() {
        //
        const [data, setData] = useState([]);
        //
        const getData = async () => {
            const url = `https://jsonplaceholder.typicode.com/${nameRequest}`;
            const res = await fetch(url);
            const data = await res.json();
            setData(data);
        };
        //
        useEffect(() => {
            getData();
        }, []);
        //
        return (
            <div>
                <h2>{title}</h2>
                <Component data={data} />
            </div>
        );
    };
}

export default HigherOrder;
