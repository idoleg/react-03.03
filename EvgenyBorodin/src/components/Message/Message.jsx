import React from "react";

import './Message.css';

export const Message = ({user, text}) => {
    return <li className={"bot-" + (user=='Robot')}><strong>{user}:</strong> {text}</li>
}
