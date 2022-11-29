import React, { useState } from "react";

const styleDiv = {
    display: "flex",
    flexDirection: "column",
    width: 350,
};
const style = { margin: "10px", border: "1px solid pink", width: 320 };

const Class07 = () => {
    const [data, setData] = useState({});

    const getInputs = (e) => {
        /*   
        const name = e.target.name;
        const value = e.target.value;
        */
        const { name, value } = e.target;
        const input = { [name]: value };
        setData({ ...data, ...input });
        console.log(data);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
    };

    const handleReset = () => {
        setData({});
    };

    return (
        <div style={styleDiv}>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input
                    style={style}
                    type="text"
                    name="name"
                    onChange={(e) => getInputs(e)}
                    placeholder="write name"
                />
                <input
                    style={style}
                    type="number"
                    name="age"
                    onChange={(e) => getInputs(e)}
                    placeholder="write age"
                />
                <input
                    style={style}
                    type="text"
                    name="hobbie"
                    onChange={(e) => getInputs(e)}
                    placeholder="write hobbies"
                />
                <input
                    style={style}
                    type="date"
                    name="date"
                    onChange={(e) => getInputs(e)}
                    placeholder="write a date"
                />
                <button type="submit">submit</button>
                <button type="reset" onClick={handleReset}>
                    reset
                </button>
            </form>
        </div>
    );
};

export default Class07;
