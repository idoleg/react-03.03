import React from 'react';
import {MessageList} from 'Components/MessageList/MessageList';
import {MessageInput} from 'Components/MessageInput/MessageInput';


const botMessages = ['Да, что ты говоришь...', 'Хмм, как интересно.', 'Не верю']

class Sequence {
    static _last_id = 0;
    static get next() {
        this._last_id++;
        return this._last_id;
    }
}


export class MessengerApp extends React.Component {

    state = {
        messages: [],
        author: "Vladislav",
    };

    componentDidUpdate() {
        const {messages, author} = this.state;
        const lastMessage = messages[messages.length - 1];
        if (lastMessage.author !== author) {
            return;
        }
        const response = botMessages[Math.floor(Math.random() * botMessages.length)];
        this.handleNewMessage(response, 'Bot');
    }
    render() {
        const {messages, author} = this.state;
        let messageList;
        if (messages.length) {
            messageList = <MessageList messages={messages} />
        } else {
            messageList = <p>Нет сообщений</p>
        }
        return (
            <div>
                <h3>Messanger</h3>
                {messageList}
                <MessageInput handleNewMessage={this.handleNewMessage} author={this.state.author} />
            </div>
        );
    }

    handleChangeAuthor = (e) => {
        this.setState({'author': e.target.value});
    };

    handleNewMessage = (content, author) => {
        this.setState(state => (
            {messages: [...this.state.messages, {id: Sequence.next, content: content, author: author}]}
        ));
    }

}
