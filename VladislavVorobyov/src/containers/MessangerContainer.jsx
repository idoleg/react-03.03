import React, {Component} from 'react';
import {Messenger} from "Components/Messenger/Messenger";


const BOT_MESSAGES = ['Да, что ты говоришь...', 'Хмм, как интересно.', 'Не верю'];
const ROBOT = 'Bot';
const USERNAME = 'Vladislav';
const CHATS = {
        1: {
            title: 'Chat1',
            messages: {
                1: {author: 'Vladislav', content: 'Hello, world'},
                2: {author: 'World', content: 'Hello, Vladislav'},
            },
        },
        2: {
            title: 'Chat2',
            messages: [],
        },
        3: {
            title: 'Chat3',
            messages: [],
        },
    };


class Sequence {
    static _last_id = 2;
    static get next() {
        this._last_id++;
        return this._last_id;
    }
}


export class MessengerContainer extends Component {
    state = {
        chats: {...CHATS},
        config: {
            userName: USERNAME,
        },
        defaultChatId: 1,
    };

    robotResponse = (chatId) => {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(
            () => {
                const response = BOT_MESSAGES[Math.floor(Math.random() * BOT_MESSAGES.length)];
                this.handleNewMessage(chatId)(response, 'Bot');
            },
            1000
        );
    };

    handleNewMessage = (id) => (content, author) => {
        author = !author ? this.state.config.userName : author;
        this.setState(state => ({
            chats: {
                ...state.chats,
                [id]: {
                    title: state.chats[id].title,
                    messages: {
                        ...state.chats[id].messages,
                        [Sequence.next]: {content: content, author: author}
                    }
                }
            },
        }));
        if (author !==ROBOT) this.robotResponse(id);
    };

    handleUpdateConfig = (config) => {
        console.log(config.userName)
        this.setState(state => ({
            config: {
                ...state.config,
                ...config,
            }
        }))
    };

    render() {
        let showProfile = false;
        if (this.props.match.url==='/profile/') {
            showProfile = true
        }
        const {chats, config} = this.state;
        const currentChatId = this.props.match.params.id || this.state.defaultChatId;
        return (
            <Messenger chats={chats}
                       showProfile={showProfile}
                       config={config}
                       currentChatId={currentChatId}
                       handleUpdateConfig={this.handleUpdateConfig}
                       handleNewMessage={this.handleNewMessage(currentChatId)}
            />
        )
    }
}