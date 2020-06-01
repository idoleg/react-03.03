import {createActions} from 'redux-actions'

export const {initChats, sendMessage, addChat, loadingChats, failedLoadedChats, fire, unfire, initProfile, loadingProfile, failedLoadedProfile} = createActions({
    INIT_CHATS: (chats) => ({chats}),
	LOADING_CHATS: () => ({}),
    SEND_MESSAGE: (id, name, text) => ({id, name, text}),
	ADD_CHAT: (id, name, botId) => ({id, name, botId}),
	FAILED_LOADED_CHATS: (error) => ({error}),
    FIRE: (id) => ({id}),
    UNFIRE: (id) => ({id}),
	INIT_PROFILE: (user) => ({user}),
	LOADING_PROFILE: () => ({}),
	FAILED_LOADED_PROFILE: (error) => ({error})
})

