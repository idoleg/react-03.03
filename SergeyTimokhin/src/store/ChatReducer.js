import { handleActions } from 'redux-actions';
import { initChats, sendMessage } from './ChatActions';

const initialState = {};


export default handleActions({
    [initChats]: (store, action) => {
        return {
            1: {
                name: 'Family',
                messages: [
                    { name: "Alex", content: "Hello fam!" },
                    { name: "Dad", content: "Hello, how are you?" },
                    { name: "Mom", content: " Don't forget about the dinner tonight!" },
                ],
                avatar: '../../img/ava1.jpg',
            },
            2: {
                name: 'Work',
                messages: [
                    { name: "Dilan", content: "Hello, World!" },
                    { name: "Andrew", content: "Hello, are you coming?" },
                    { name: "Dilan", content: " Of course! See ya on Sunday" },
                ],
                avatar: '../../img/ava2.jpg',
            },
            3: {
                name: 'Friends',
                messages: [
                    // {name: "Boby", content: "Hello, World!"},
                    // {name: "Scott", content: "Hello, are you coming?"},
                    // {name: "Jennifer", content: " Wish I could come, but I'm out of town this weekend"},
                ],
                avatar: '../../img/ava3.jpg',
            },
        }
    },
    [sendMessage]: (store, action) => {
        console.log("action", action)
            // console.log(store)
        const { id, name, content } = action.payload;

        return {
            ...store,
            [id]: {
                ...store[id],
                messages: [
                    ...store[id].messages,
                    { name, content },
                ]
            }
        };
    }
}, initialState)


// const reducer = function(store = { counter: 0 }, action) {
//     console.log(action);

//     return {
//         ...store,
//         counter: store.counter + 1,
//     }
// }