import React from "react"
import ReactDOM from "react-dom"

let messages = [
    {name: "Ivan", content: "Hello, world!"},
    {name: "Petr", content: "Hello! How are you?"},
    {name: "Ivan", content: "I'm fine."}
]

let newMessage = {name: "Fedor", content: "Everything is Ok!"}

const AddButton = function() {
    return <button onClick={AddnewMessage}>Add message</button>
}

const AddnewMessage = function() {
    messages.push(newMessage)
    ReactDOM.render(<MessageList messages={messages}/>, document.getElementById('root'))
}

const Message = ({name, content}) => {
    return <li><strong>{name}:</strong> {content}</li>
}

const MessageList = ({messages}) => {
    return (<ul>
        {messages.map((item, index) => <Message {...item} key={index} />)}
            </ul>);
}

ReactDOM.render (<MessageList messages={messages}/>, document.getElementById('root'))
ReactDOM.render(<AddButton/>, document.getElementById('buttom-block'))

