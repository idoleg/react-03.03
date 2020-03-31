import {sendMessage, addChat} from './chatActions'

const BOT_NAME = "Bot"
const timeoutID = {}
export default (store) => (next) => (action) => {
	next(action)

	if (action.type === sendMessage.toString()) {
		const {name, id} = action.payload
		if (name !== BOT_NAME) {
			clearTimeout(timeoutID[id])
			timeoutID[id] = setTimeout(generateBotAnswer, 2000, store, id, name)
		}
	}
	else if (action.type === addChat.toString()) {
		generateBotAnswerForNewChat(store, action.payload.id)
	}

}

function generateBotAnswer(store, id, name) {
	const chatName = store.getState().chats.chats[id].name
	store.dispatch(sendMessage(id, BOT_NAME, `Hello, ${name}! I'm Robot in ${chatName}.`))
}

function generateBotAnswerForNewChat(store, id) {
	const chatName = store.getState().chats.chats[id].name
	store.dispatch(sendMessage(id, BOT_NAME, `Welcome to new chat ${chatName}!`))
}

