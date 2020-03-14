import React from 'react';
import {Message} from "Components/Message/Message";

export class MessageList extends React.Component {
    render() {
        return (
            <ul>
                { this.props.messages.map(message => <Message {...message} key={message.id}/>) }
            </ul>
        );
    }
}
