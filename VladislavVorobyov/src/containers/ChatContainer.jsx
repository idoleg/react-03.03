import React, { Component } from 'react';
import {Chat} from 'Components/Chat/Chat';

const botMessages = ['Да, что ты говоришь...', 'Хмм, как интересно.', 'Не верю'];
const ROBOT = 'Bot';

class Sequence {
    static _last_id = 2;
    static get next() {
        this._last_id++;
        return this._last_id;
    }
}


export class ChatContainer extends Component {
    timeout = undefined;

    state = {
        chat: {...this.props.chat},
    };

    componentDidUpdate() {
        const {messages} = this.state.chat;
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
        author = !author ? this.props.author : author;
        this.setState(state => ({
            chat: {
              ...state.chat,
              messages: [
                  ...state.chat.messages,
                  {id: Sequence.next, content: content, author: author}]
            }
        }))
    };

    render() {
        const {chat} = this.state;
        return (
            <Chat chat={chat} handleNewMessage={this.handleNewMessage}/>
        )
    }
}
