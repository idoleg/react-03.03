import { handleActions } from 'redux-actions';
import { initChats, sendMessage, addChat, updateProfile, selectChat, fireChat, unfireChat } from './chatActions.js';

const initialState = {};

export default handleActions({
    [initChats]: (store, action) => {
        return {
            chats: {
                1: {
                    name: "IT Group",
                    fire: false,
                    selected: false,
                    messages: [
                        { user: "Ivan", text: "Hello, world!" },
                        { user: "Petr", text: "Helo, how are you?" },
                        { user: "Ivan", text: "I'm well" }
                    ]
                },
                2: {
                    name: "Bot Group",
                    fire: false,
                    selected: false,
                    messages: [
                        { user: "Bot 1", text: "Hello, bots!" },
                        { user: "Bot 2", text: "Get out of here, bot!" },
                        { user: "Bot 3", text: "No bots allowed in this chat, ha-ha-ha!" }
                    ]
                },
                3: {
                    name: "Never read this",
                    fire: false,
                    selected: false,
                    messages: [
                        { user: "sss", text: "Whoa!" },
                        { user: "qqq", text: "Oops!" },
                        { user: "www", text: "Yep." }
                    ]
                }
            },
            profile: {
                defaultUser: '',
            }
        }
    },
    [sendMessage]: (store, action) => {
        const {id, user, text} = action.payload;
        // console.log(store)
        return {
            ...store,
            chats: {
                ...store.chats,
                [id]: {
                    ...store.chats[id],
                    messages: [
                        ...store.chats[id].messages,
                        {user, text},
                    ]
                }
            }
        };
    },
    [addChat]: (store, action) => {
        const newId = Object.keys(store.chats).length + 1
        const {name} = action.payload;
        return {
            ...store,
            chats: {
                ...store.chats,
                [newId]: { 
                    name,
                    fire: false,
                    selected: false,
                    messages: []
                }
            }
        };
    },
    [updateProfile]: (store, action) => {
        const {profile} = action.payload;
        return {
            ...store,
            profile
        }
    },
    [selectChat]: (store, action) => {
        const {id} = action.payload;
        const [prevId] = Object.keys(store.chats).filter(item => store.chats[item].selected)
        if (prevId) {
            return {
                ...store,
                chats: {
                    ...store.chats,
                    [id]: {
                        ...store.chats[id],
                        selected: true,
                    },
                    [prevId]: {
                        ...store.chats[prevId],
                        selected: false,
                    }
                }
            }
        } else {
            return {
                ...store,
                chats: {
                    ...store.chats,
                    [id]: {
                        ...store.chats[id],
                        selected: true,
                    },
                }
            }
        }
    },
    [fireChat]: (store, action) => {
        const {id} = action.payload;
        return {
            ...store,
            chats: {
                ...store.chats,
                [id]: {
                    ...store.chats[id],
                    fire: true,
                }
            }
        }
    },
    [unfireChat]: (store, action) => {
        const {id} = action.payload;
        return {
            ...store,
            chats: {
                ...store.chats,
                [id]: {
                    ...store.chats[id],
                    fire: false,
                }
            }
        }
    },
}, initialState)