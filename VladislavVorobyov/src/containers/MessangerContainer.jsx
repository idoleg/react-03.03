import React, {Component} from 'react';
import {Messenger} from "Components/Messenger/Messenger";

export class MessengerContainer extends Component {
    state = {
        chats: [
            {
                id: 1,
                title: 'Chat1',
                messages: [
                    {id: 1, author: 'Vladislav', content: 'Hello, world'},
                    {id: 2, author: 'World', content: 'Hello, Vladislav'},

                ],
            },
            {
                id: 2,
                title: 'Chat2',
                messages: [],
            },
            {
                id: 3,
                title: 'Chat3',
                messages: [],
            },
        ],
        config: {
            userName: 'Vladislav',
        },
        currentChat: 1,
    };

    render() {
        const {chats, config} = this.state;
        console.log(chats, config)
        return (
            <Messenger chats={chats} config={config} />
        )
    }
}