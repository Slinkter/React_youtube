import React, { useState } from "react";
// Stlye : 1:29:14

const style = {
    internal: {
        color: "blue",
        backgroundColor: "yellow",
    },
    dark: {
        color: "white",
        backgroundColor: "black",
    },
    light: {
        color: "black",
        backgroundColor: "white",
    },
};

const Class08 = () => {
    const [theme, setTheme] = useState(false);
    const toggleTheme = () => {
        setTheme(!theme);
    };

    return (
        <div>
            <h1>External styling</h1>
            <h1 style={theme ? style.dark : style.light}> Internal styling</h1>
            <h1 style={{ color: "green", backgroundColor: "red" }}>
                Inline styling{" "}
            </h1>

            <button onClick={toggleTheme}>Change Theme</button>
        </div>
    );
};

export default Class08;
