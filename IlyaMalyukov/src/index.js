import React from "react";
import ReactDOM from "react-dom"

const messages = [{
        name: "Ilya",
        content: "Hello"
    },
    {
        name: "Alyona",
        content: "Hello, how are you?"
    },
    {
        name: "Egor",
        content: "..."
    },
]

const Message = (props) => {
    return <li > {
        props.name
    } {
        props.content
    } < /li>
}

const MessageList = (props) => {
        return ( < ul > {
                props.messages.map(item => Message(item))
            } <
            /ul>)
        }

        function Link(props) {

            return <a href = {
                "https://" + props.to
            } > {
                props.to
            } < /a>
        }

        ReactDOM.render(MessageList messages = {
                    messages
                }
                / > , document.getElementById("root"))