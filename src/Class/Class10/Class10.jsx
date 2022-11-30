import React, { useState } from "react";
import { ComponetContext } from "./GlobalContex";
import Home from "./Home";
import Profile from "./Profile";

const Class10 = () => {
    const [name, setName] = useState("Jhonny");
    return (
        <div>
            <ComponetContext.Provider value={{ name, setName }}>
                <Home />
                <Profile />
            </ComponetContext.Provider>
        </div>
    );
};

export default Class10;
