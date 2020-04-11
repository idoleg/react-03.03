import React, { Component } from 'react';
import { Message } from '~/components/Message/Message';
import {ChatForm} from '~/components/ChatForm/ChatForm';
import "./MessageField.scss";

export class MessageField extends Component {
    state = {
        messages: [
            { name: "Ivan", content: "Hello, world!" },
            { name: "Petr", content: "Helo, how are you?" },
            { name: "Ivan", content: "I'm well" },
        ]
    }


    onSendMessage = ({name, content}) => {
        this.setState(
            (state) => ({ messages: [ ...this.state.messages, { name: name, content: content } ] })
        )
    }

    componentDidUpdate() {
        const name = this.state.messages[this.state.messages.length - 1].name;
        if (name !== "Robot") {
           setTimeout (() => this.addRobotAnswer(name), 1000) ;
        }
    }

    addRobotAnswer(name) {
          this.setState(
            (state) => ({ messages: [ ...this.state.messages, { name: 'Robot', content: `Уважаемый ${name}! Ваше сообщение принято.` } ] })
        )
    }

    render() {
        const { state: { messages }, onSendMessage } = this;
        return (
            <div className='messageField'>
                <ul className='messages'>
                    {messages.map((item, index) => <Message {...item} key={index} />)}
                </ul>
                <ChatForm onSendMessage={onSendMessage}/>
  
            </div>
        )
    }
}