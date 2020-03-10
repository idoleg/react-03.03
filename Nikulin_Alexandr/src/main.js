import React from "react";
import ReactDOM from "react-dom";

// const element = React.createElement('a', {href: 'https:ya.ru'}, "Yandex.ru");

// const Link = (props) => React.createElement('a', {href: 'https://' + props.to}, props.to);

const messages = [
    {name: "Ivan", content: "Hello, world!"},
    {name: "Petr", content: "How are you?"},
    {name: "Ivan", content: "I'm well"},
];

const newMessage = {name: "Ivan", content: "i ya normalno"};

const Button = () => {
    console.log();
    return <button onClick={click}>Send message</button>
};

const click = () => {
    messages.push(newMessage);
    console.log(messages);
};

const Message = ({name, content}) => {
    return <li><strong>{name}:</strong> {content}</li>
};
const MessageList = ({messages}) => {
    return (<ul>
        {messages.map((item, index) => <Message {...item} key={index}/>)}
        <Button/>
    </ul>)
};
// function Link(props) {
//     return <a href={"https://" + props.to}>{props.to.toLocaleUpperCase()}</a>
// }

ReactDOM.render(<MessageList messages={messages}/>, document.getElementById("root"));