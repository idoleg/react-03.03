import React from 'react';
import { Message } from '~/components/Message/Message';
import { ChatForm } from '~/components/ChatForm/ChatForm';
import "./MessageField.scss";

export const MessageField = ({messages, handleSendMessage, userName }) => {


    if (messages === undefined) {
        return (
            <div className='messageField'>Выберите чат!</div>
        )
    }
 
        
        return (
            <div className='messageField'>
                <ul className='messages'>
                    {messages.map((item, index) => <Message {...item} key={index} />)}
                </ul>
                <ChatForm handleSendMessage={handleSendMessage} userName={userName}/>

            </div>
        )

        
}