import React from "react";
import ReactDOM from "react-dom";


// const element = React.createElement("a", { href: "https://ya.ru" }, "Yandex");
// const Link = (props) => React.createElement("a", { href: "https://" + props.to }, props.to.toUpperCase());


const messages = [
    {name: "Boby", content: "Hello, World!"},
    {name: "Dilan", content: "Hello, how are you?"},
    {name: "Boby", content: "i'm good, thanks"},
]

const Message = ({name, content}) => {
    return <li><strong>{name}</strong>: {content}</li>
}

const MessageList = ({messages}) => {
    return (<ul>
        {messages.map((item, index) => <Message {...item} key={index} />)}
    </ul>)
}


ReactDOM.render(<MessageList messages={messages}/>, document.getElementById("root"));
