import {handleActions} from 'redux-actions'
import { loadingChats, failedLoadedChats, initChats, sendMessage, addChat, fire, unfire } from './chatActions'
import update from 'react-addons-update'


const initialState = {
    chats: {},
    isLoading: false,
    error: null,
}

export default handleActions({
	[loadingChats]: (store, action) => {
        return {
			...store,
			isLoading: true,
		}
    },

	[failedLoadedChats]: (store, action) => {
        return {
            ...store,
            isLoading: false,
            error: action.payload.error,
        }
    },

    [initChats]: (store, action) => {
        return {
			...store,
            isLoading: false,
			chats: action.payload
		}
    },

    [sendMessage]: (store, action) => {
        const {id, name, text} = action.payload
		const chatName = store.chats[id].name
        return {
			...store,
            chats: {
                ...store.chats,
                [id]: { ...store.chats[id],
						name: chatName,
                    messages: [...store.chats[id].messages, {name, text}]
                }
            }
        }
    },

	[addChat]: (store, action) => {
		const {id, name, botId} = action.payload

		 return {
			...store,
            chats: {
                ...store.chats,
                [id]: {name, botId, fire: false, messages: []}
            }
        }
	},

	 [fire]: (store, action) => {
        const {id} = action.payload
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

    [unfire]: (store, action) => {
        const {id} = action.payload
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
    }

}, initialState)


