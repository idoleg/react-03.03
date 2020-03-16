import React, { Component } from 'react';
import {Chat} from 'Components/Chat/Chat';

const botMessages = ['Да, что ты говоришь...', 'Хмм, как интересно.', 'Не верю'];
const ROBOT = 'Bot';

class Sequence {
    static _last_id = 0;
    static get next() {
        this._last_id++;
        return this._last_id;
    }
}


export class ChatContainer extends Component {
    timeout = undefined;

    state = {
        messages: [],
        author: "Vladislav",
    };

    componentDidUpdate() {
        const {messages} = this.state;
        const lastMessage = messages[messages.length - 1];
        if (lastMessage.author === ROBOT) return;
        clearTimeout(this.timeout);
        this.timeout = setTimeout(
            () => {
                const response = botMessages[Math.floor(Math.random() * botMessages.length)];
                this.handleNewMessage(response, 'Bot');
            },
            1000
        );
    }

    handleNewMessage = (content, author) => {
        author = !author ? this.state.author : author;
        this.setState(state => (
            {messages: [...state.messages, {id: Sequence.next, content: content, author: author}]}
        ));
    };

    render() {
        const {messages} = this.state;
        return (
            <Chat messages={messages} handleNewMessage={this.handleNewMessage}/>
        )
    }
}
