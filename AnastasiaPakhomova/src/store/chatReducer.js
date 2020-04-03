import {handleActions} from 'redux-actions'
import {initChats, sendMessage, addChat} from './chatActions'
import update from 'react-addons-update'


const initialState = {
	chats: {}
}

export default handleActions({
    [initChats]: (store, action) => {
        return null
		//{
//            chats: {
//                1: {
//                    name: 'Chat 1',
//                    messages: [
//                        {name: "Ivan", text: "Hello in chat 1!"},
//                        {name: "Petr", text: "Helo, how are you?"},
//                        {name: "Ivan", text: "I'm well."}
//                    ]
//                },
//                2: {
//                    name: 'Chat 2',
//                    messages: [
//                        {name: "Fedor", text: "Hi, it's chat 2!"},
//                        {name: "NiKola", text: "Hi! How are you?!"},
//                        {name: "Fedor", text: "I'm ok."}
//                    ]
//                },
//                3: {
//                    name: 'Chat 3',
//                    messages: [
//                        {name: "Alex", text: "Hello in chat 3!"},
//                        {name: "Moisha", text: "Helo, how are you?"},
//                        {name: "Alex", text: "I'm well"}
//                    ]
//                },
//
//            },
       // }
    },

    [sendMessage]: (store, action) => {
        const {id, name, text} = action.payload
		const chatName = store.chats[id].name
        return {
            chats: {
                ...store.chats,
                [id]: {name: chatName,
                    messages: [...store.chats[id].messages, {name, text}]
                }
            }
        }
    },
	[addChat]: (store, action) => {
		const {id, name} = action.payload

		 return {
            chats: {
                ...store.chats,
                [id]: {name, messages: []}
            }
        }
	}

}, initialState)





