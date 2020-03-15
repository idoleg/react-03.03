import React, {Component} from 'react';
import { ChatList } from '../components/ChatList/ChatList'

export const ROBOT = "Robot"

export class ChatListContainer extends Component {
    state = {
        chats:[
            { name: "Ivan", img: "https://via.placeholder.com/40" },
            { name: "Alex", img: "https://via.placeholder.com/40" },
            { name: "Robot", img: "https://via.placeholder.com/40" },
        ]
    }
    render() {
        return  <ChatList chats={this.state.chats} />
    }
}