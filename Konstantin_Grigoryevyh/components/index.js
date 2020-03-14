import React from "react";
import ReactDOM from "react-dom";
import { MessageList } from './MessageList.js';
import Form from './AddMessage.js';

class ShowChat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [
                { name: "Oleg", content: "Hi, all!" },
                { name: "Anton", content: "Hello!" },
                { name: "Oleg", content: "Interesting lesson? )" },
            ]
        };

        this.updateMessageList = this.updateMessageList.bind(this);
    }

    updateMessageList(message) {
        const array = [...this.state.messages, message];

        this.setState({ messages: array });
    }

    render() {
        const { messages } = this.state;

        return (
                <div>
                    <MessageList messages={messages} />
                    <Form updateMessageList={this.updateMessageList} />
                </div>
        );
    }
}

ReactDOM.render(<ShowChat />, document.getElementById("root"))