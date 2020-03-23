import React from "react";
import ReactDOM from "react-dom";

import massages from "./massages";

const Massage = ({name, content}) => <li><strong>{name}</strong>{content}</li>

const MassageList = ({massages}) => {
    return (
        <ul>
        {massages.map((item, index) => <Massage {...item} key={index} />)}
        </ul>
    );
}


ReactDOM.render(
    <MassageList massages={massages} />,
    document.getElementById("root")
);