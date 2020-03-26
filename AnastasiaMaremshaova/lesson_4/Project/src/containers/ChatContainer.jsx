import React, { Component } from 'react';
import { Chat } from '../components/Chat/Chat';

export const ROBOT = 'Robot';
export class ChatContainer extends Component {

    render(){
            let id = this.props.match.params.id;
            return  (
            <Chat messages={this.props.state[id].messages} onSendMessage={this.props.handleSendMessage(id)}/>); 
    }
}; 