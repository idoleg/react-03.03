import { handleActions } from 'redux-actions';
import { initChats, sendMessage, addChat} from './chatActions';


const initialState = {};

export default handleActions({
    [initChats]: (store, action) => {
        return {
            1: {
                name: 'Chat 1',
                messages: [
                    { name: "Ivan", text: "Hello, in chat 1!" },
                    { name: "Petr", text: "Helo, how are you?" },
                    { name: "Ivan", text: "I'm well" },
                ]
            },
            2: {
                name: 'Chat 2',
                messages: [
                    { name: "Nikola", text: "Hi" },
                    { name: "Dima", text: "It's chat 2" },
                    { name: "Nikola", text: "Ok" },
                ]
            },
            3: {
                name: 'Chat 3',
                messages: []
            }
        };
    },
    [sendMessage]: (store, action) => {
        const {id, name, text} = action.payload;
        return {
            ...store,
            [id]: {
                ...store[id],
                messages: [
                    ...store[id].messages,
                    {name, text},
                ]
            }
        };
    },
    [addChat]: (store, action) => {
        const {id, name} = action.payload;

        return {
            ...store,
            [id]: {
                name,
                messages: [],
            }
        }
    },
}, initialState)