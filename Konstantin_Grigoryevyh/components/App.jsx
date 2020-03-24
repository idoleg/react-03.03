import React, {Component}  from "react";
import { MessageList } from './MessageList/MessageList';
//import Form from './MessageForm/MessageForm';
import MessageField from './MessageField/MessageField';


export class Messenger extends Component {
    constructor() {
        super();
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
        const arrayMessages = [...this.state.messages, message];

        this.setState({ messages: arrayMessages });
    }

    render() {
        const { messages } = this.state;

        return (
            <div>
                <MessageList messages={messages} />
                <MessageField updateMessageList={this.updateMessageList} />
            </div>
        );
    }
}
