import React from "react";

export const Message = ({user, text}) => {
    return <li><strong>{user}:</strong> {text}</li>
}
