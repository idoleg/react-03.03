import { push } from 'connected-react-router';

import { addChat, sendMessage } from './chatActions';
import { ROBOT } from '../containers/ChatContainer.jsx';

const timeoutId = {}

export default store => next => action => {
    next(action);

    if(action.type === sendMessage.toString()){
        const {id, user} = action.payload
        if(user !== ROBOT ) {
            clearTimeout(timeoutId[id]);
            timeoutId[id] = setTimeout(generateBotAnswer, 5000, store, id, user)
            
        }
        // store.dispatch(push('/chats/' + action.payload.id));
    }else if(action.type === addChat.toString()){
        const {name} = action.payload
        const id = Object.keys(store.getState().app.chats).length
        generateBotAnswerInNewChat(store, id)
    }
}

function generateBotAnswer (store, id, user) {
    const chatName = store.getState().app.chats[id].name
    store.dispatch(sendMessage(id, ROBOT, `Hello ${user} in ${chatName}! Robot is busy, it will answer soon...`))
}

function generateBotAnswerInNewChat (store, id) {
    const chatName = store.getState().app.chats[id].name
    store.dispatch(sendMessage(id, ROBOT, `Welcome to ${chatName}!`))
}