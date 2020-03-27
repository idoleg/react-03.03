import React from 'react';
import { Message } from '~/components/Message/Message';
import { ChatForm } from '~/components/ChatForm/ChatForm';
import "./MessageField.scss";

export const MessageField = ({ chatId, messages, onSendMessage }) => {
    // state = {
    //     messages: [
    //         { name: "Ivan", content: "Hello, world!" },
    //         { name: "Petr", content: "Helo, how are you?" },
    //         { name: "Ivan", content: "I'm well" },    
    //     ]
    // }




    // const { onSendMessage } = this;
    // const {messages} = this.props;

    if (chatId === undefined) {
        return (
            <div className='messageField'>Выберите чат!</div>
        )
    }
        
        
        return (
            <div className='messageField'>
                <ul className='messages'>
                    {messages.map((item, index) => <Message {...item} key={index} />)}
                </ul>
                <ChatForm chatId={chatId} onSendMessage={onSendMessage} />

            </div>
        )

        
}