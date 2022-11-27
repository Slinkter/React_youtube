import React, { useState } from "react";

const Class02 = () => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    const increment = () => {
        setCount(count + 1);
        setIsVisible(!isVisible);
    };
    return (
        <div>
            <h2>Count : {count}</h2>
            {isVisible ? <p> is true </p> : <p>is false</p>}
            <button onClick={increment}>+</button>
        </div>
    );
};

export default Class02;
