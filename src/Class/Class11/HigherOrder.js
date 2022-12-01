import { useEffect, useState } from "react";

function HigherOrder(title, Component, namerequest) {
    return function HOC() {
        const [data, setData] = useState([]);

        const getData = async () => {
            const url = `https://jsonplaceholder.typicode.com/${namerequest}`;
            const res = await fetch(url);
            const data = await res.json();
            setData(data);
            console.log(data);
        };

        useEffect(() => {
            getData();
        }, []);

        return (
            <div>
                <h3>{title}</h3>
                <Component data={data} />
            </div>
        );
    };
}

export default HigherOrder;
