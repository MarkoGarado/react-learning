import React from "react";

export const Hello = () => {
    return <div id="container">
        <h1>Hello, this is Mark!</h1>
    </div>
}

// it looks messy
export const HelloWithoutJsx = () => {
    return React.createElement(
        "div", {id: "container"}, 
        React.createElement("h1", null,
            "Hello, this is Mark!")
    );
}