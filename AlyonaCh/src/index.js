import React from "react";
import ReactDOM from "react-dom";

const textArr = [];

const textAdd = ({textArr}) => {
    console.log('tut')
    return (textArr.push('text'));
}

function addText() {
    ReactDOM.render(<textAdd textArr={textArr} />, document.getElementById("root"))

}



// const messages = [
//     { name: "Ivan", content: "Hello, world!" },
//     { name: "Petr", content: "Helo, how are you?" },
//     { name: "Ivan", content: "I'm well" },
// ]


// const Message = ({name, content}) => {
//     return <li><strong>{name}:</strong> {content}</li>
// }

// const MessageList = ({messages}) => {
//     return (<ul>
//         {messages.map((item, index) => <Message {...item} key={index} />)}
//     </ul>);
// }

// ReactDOM.render(<MessageList messages={messages} />, document.getElementById("root"))