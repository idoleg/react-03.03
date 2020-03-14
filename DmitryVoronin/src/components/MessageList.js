import React from 'react';
import Message from './Message';

export default class MessageList extends React.Component {
    render() {
        const { messages } = this.props;

        return (
            <ul className="content__messages">
                {messages.map((message, i) => (
                    <Message {...message} key={i} />
                ))}
            </ul>
        );
    }
}
