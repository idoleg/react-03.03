import React from 'react';

import {Message} from "./Message";

export const MessageField = ({messages}) => {
    return (<ul>
            {messages.map((item, index) => <Message {...item} key={index} />)}
    </ul>)
};
