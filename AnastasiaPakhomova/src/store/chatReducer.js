import {handleActions} from 'redux-actions'
import {initChats, sendMessage, addChat} from './chatActions'
import update from 'react-addons-update'


const initialState = {
	chats: {}
}

export default handleActions({
    [initChats]: (store, action) => {
        return null
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





