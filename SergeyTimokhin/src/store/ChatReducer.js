import { handleActions } from 'redux-actions';
import { initChats, sendMessage } from './ChatActions';

const initialState = {

};


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
            },
            2: {
                name: 'Work',
                messages: [
                    { name: "Dilan", content: "Hello, World!" },
                    { name: "Andrew", content: "Hello, are you coming?" },
                    { name: "Dilan", content: " Of course! See ya on Sunday" },
                ],
            },
            3: {
                name: 'Friends',
                messages: [
                    // {name: "Boby", content: "Hello, World!"},
                    // {name: "Scott", content: "Hello, are you coming?"},
                    // {name: "Jennifer", content: " Wish I could come, but I'm out of town this weekend"},
                ],
            },
        }
    },
    [sendMessage]: (store, action) => {
        console.log("action", action)
        return store
    },
}, initialState)


// const reducer = function(store = { counter: 0 }, action) {
//     console.log(action);

//     return {
//         ...store,
//         counter: store.counter + 1,
//     }
// }