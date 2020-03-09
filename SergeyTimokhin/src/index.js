import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components/App";


// const messages = [
//     {name: "Boby", content: "Hello, World!"},
//     {name: "Dilan", content: "Hello, how are you?"},
//     {name: "Boby", content: "I'm good, thanks"},
// ]

// const Message = ({name, content}) => {
//     return <li><strong>{name}:</strong> {content}</li>
// }

// const MessageList = ({messages}) => {
//     return (<ul>
//         {messages.map((item, index) => <Message {...item} key={index} />)}
//     </ul>)
// }

// const Messenger = ({messages}) => {
//     return (<div>
//         <MessageList messages={messages} />
//         <button>Send message</button>
//     </div>)
// }


ReactDOM.render( < App / > , document.getElementById("root"));