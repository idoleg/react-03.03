import React from "react";
import ReactDom from "react-dom";

//const element = React.createElement("a", {href: "http://ya.ru"}, "Yandex.ru")

// function Link(props) { 
//     return React.createElement("a", {href: "http://" + props.to}, props.to.toUpperCase());
// }
// function Link(props) {
//     return <a href= {"https://" + props.to}>{props.to.toLocaleUpperCase()}</a>
// }

const messages = [
    {name: "Ivan: ", content: "Hello world!"},
    {name: "Alexandr: ", content: "Hi!"},
    {name: "Dmitry: ", content: "Hi, how are you?"},
    {name: "Victor: ", content: "I'm fine, thanks"},
]

const Message = ({name, content}) => {
return <li><strong>{name}</strong>{content}</li>
}

const MessageList = ({messages}) => {
    return (<ul>
        {/* {props.messages.map(item => <Message name = {item.name} content = {item.content} />)} */}
        {messages.map(item => <Message {...item} />)}
        </ul>);
}

ReactDom.render(<MessageList messages = {messages}/>, document.getElementById("root"))