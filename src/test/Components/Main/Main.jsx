import React, { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";

const Main = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    console.log(theme);

    return (
        <div>
            <h3>Main Page</h3>
            <button onClick={toggleTheme}>Click Here</button>
        </div>
    );
};

export default Main;
