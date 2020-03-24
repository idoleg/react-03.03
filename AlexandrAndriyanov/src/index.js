import React from 'react';
import ReactDOM from 'react-dom';

import {App} from "./components/App";

//import {MessageList} from "./components/MessageField";
/*
const messages = [
    {name: "Ivan", content: "Hello!"},
    {name: "Petr", content: "Hello, how are you?"},
    {name: "Ivan", content: "I`m fine"}
];

const Message = ({name, content}) => {
    return <li><strong>{name}:</strong> {content}</li>
    
};

const MessageList = ({messages}) => {
    return (<ul>
            {messages.map((item, index) => <Message {...item} key={index} />)}
    </ul>)
};
*/


//ReactDOM.render(<MessageList messages={messages}/>, document.getElementById('root')


ReactDOM.render(<App/>, document.getElementById('root'))