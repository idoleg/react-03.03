import { handleActions } from 'redux-actions';
import { initChats, sendMessage } from './chatActions';

const initialState = {};

export default handleActions({
    [initChats]: (store, action) => {
        return {
            1: {
                name: 'Chat 1',
                messages: [
                    { name: "Ivan", content: "Hello, in chat 1!" },
                    { name: "Petr", content: "Helo, how are you?" },
                    { name: "Ivan", content: "I'm well" },
                ]
            },
            2: {
                name: 'Chat 2',
                messages: [
                    { name: "Nikola", content: "Hi" },
                    { name: "Dima", content: "It's chat 2" },
                    { name: "Nikola", content: "Ok" },
                ]
            },
            3: {
                name: 'Chat 3',
                messages: []
            }
        };
    },
    [sendMessage]: (store, action) => {
        const {id, name, content} = action.payload;
        return {
            ...store,
            [id]: {
                ...store[id],
                messages: [
                    ...store[id].messages,
                    {name, content},
                ]
            }
        };
    }
}, initialState)