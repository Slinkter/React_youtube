import React, { useState } from "react";

const Class03 = () => {
    const [name, setName] = useState("Luis");

    const handleChangeName = (value) => {
        console.log(value);
        setName(value);
    };

    return (
        <div>
            <ComponentChild name={name} handleChangeName={handleChangeName} />
        </div>
    );
};

const ComponentChild = (props) => {
    return (
        <div>
            <h1> {props.name} </h1>
            <button
                onClick={() => {
                    props.handleChangeName("Jhonny");
                }}
            >
                Change Name
            </button>
        </div>
    );
};

export default Class03;
