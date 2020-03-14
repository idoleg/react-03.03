
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app"


ReactDOM.render(<App />, document.getElementById('root'));
//   const messages = [
//     {name:"Ivan", content:"Hellow world!"},
//     {name:"Dmitry", content:"Hellow! How are you?"},
//     {name:"Ivan", content:"I am fine."}
//   ]
//
//   const Message = ({name, content}) => {
//     return <li><strong>{name}</strong>: {content}</li>
//   }
//
//   const MessageList = ({messages}) => {
//     return (<ul>
//       {messages.map((item, index) => <Message {...item} key = {index} />)}
//       </ul>);
//   }
// //<MessageList messages = {messages} />
