import {handleActions, handleAction} from 'redux-actions';
import {initProfileData, initChats, sendMessage, createNewChat} from './chatActions';

const initialState = {
    chats: {}
, };


export default handleActions ({
    [initChats] : (store, action) => {
        return {
            state : {
                profileData: {
                    name: 'Заядлая кошатница',
                    age: 20
                },
                chats: {
                    1: {
                        name: 'Chat 1', 
                        messages: [
                            { name: "Ivan", content: "Hello, Petr!" },
                            { name: "Petr", content: "Hello, Ivan" },
                            { name: "Ivan", content: "How are you?" },
                        ]
                    },
                    2: {
                        name: 'Chat 2', 
                        messages: [
                            { name: "Maria", content: "Hello, Petr!" },
                            { name: "Petr", content: "Hello, Maria" },
                            { name: "Maria", content: "How are you?" },
                        ]
                    },            
                },
                countChats: 2
            }
        } 
    },
    [sendMessage] : (store, action) =>{
        const {id, name, content} = action.payload
        console.log("action", action);
        return {
            ...store, state:{...store.state, chats: {...store.state.chats,
            [id]: {
                ...store.state.chats[id],
                messages: [
                    ...store.state.chats[id].messages,
                    {name, content},
                ]
            } 
        }}}
    },
    [createNewChat] : (store, action)=>{
        const id = Number(store.state.countChats) + 1;

        return  {...store,  state:{...store.state, chats: {...store.state.chats,
            [id] : {
                name: `Chat ${id}`,
                messages: [
                     {name: '', content: ''} ]
            }
        }
        , countChats : id}}}

}, initialState)