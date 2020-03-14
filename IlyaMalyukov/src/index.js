import React from "react";
import ReactDOM from "react-dom";
import {App} from './components/App';

// console.log(JS, Test, Content);

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

// const Messenger = ({messages}) => {
    
//     const sendMessage = () => {
//         messages.push({name: "Test", content: "It's wrong way"});
//         renderApp();
//     }

//     return (
//         <div>
//             <MessageList messages={messages} />
//             <button onClick={sendMessage}>Send message</button>
//         </div>
//     )
// }

/// декларативный подход - onclick
/// императивный подход - addEnentListenet

// function renderApp() {
//     ReactDOM.render(<Messenger messages={messages} />, document.getElementById("root"))
// }

// renderApp();

ReactDOM.render(<App/>, document.getElementById("root"))
