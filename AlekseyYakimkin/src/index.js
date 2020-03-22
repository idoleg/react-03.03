import React from "react";
import ReactDOM from "react-dom";
import { App } from './App'

ReactDOM.render(<App/> , document.getElementById("root"))

// const messages = [
//     { name: "Ivan", content: "Hello, world!" },
//     { name: "Petr", content: "Helo, how are you?" },
//     { name: "Ivan", content: "I'm well" },
// ]

// const newMessage = {name:"Alex", content: "Hi there!"}

// const Message = ({name, content}) => {
//     return <li><strong>{name}:</strong> {content}</li>
// }

// const MessageList = ({messages}) => {
//     function pushNewMessage(e){
//         console.log('Click');
//         messages.push(newMessage)
//         ReactDOM.render(<MessageList messages={messages} /> , document.getElementById("root"))
//     }
//     return (
//         <div>
//             <ul>
                
//                 {messages.map((item, index) => <Message {...item} key={index} />)}
//             </ul>
//             <button id="newmessage" name="newmessage" val="newmessage" onClick={pushNewMessage}>Новое сообщение</button>
//         </div>
//     );
// }

// ReactDOM.render(<MessageList messages={messages} /> , document.getElementById("root"))

