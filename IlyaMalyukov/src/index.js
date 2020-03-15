import React from "react";
import ReactDOM from "react-dom";
import { App } from './components/App';


//const messages = [
//    { name: "Egor", content: "Hello" },
//    { name: "Ilya", content: "Hello, bro" },
//    { name: "Egor", content: "Ilya are not my friend" }
//]

//const Message = ({ name, content }) => {
//    return <li><strong>{name}:</strong> {content}</li>
//}

//const MessageList = ({ messages }) => {
//    return (<ul>
//        {messages.map((item, index) => <Message {...item} key={index} />)}
//    </ul>);
//}

//const Messenger = ({ messages }) => {

//    return (
//        <div>
//            <MessageList messages={messages} />
//            <button onClick={() =>}>Send Message</button>
//       </div >
//    )
//}

ReactDOM.render(<App />, document.getElementById("root"))