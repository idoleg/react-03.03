import {sendMessage} from 'Actions/messageActions';
import {startFire, finishFire} from "Actions/chatActions";


const USER_ID = 1,
    BOT_ID = 2,
    timeouts = {};



export default store => next => (action) => {
    switch (action.type) {
        case sendMessage.toString(): {
            validateSendMessageAction(store, action);
            generateBotAnswer(store, action);
            fireChat(store, action);
        }

    }
    next(action)
}

function validateSendMessageAction(store, action) {
    const storeData = store.getState();
    const {chatId, senderId} = action.payload;
    const chat = storeData.chats.data.find(chat => chat.id === chatId);
    const user = storeData.users.find(user => user.id === senderId);
    if (!chat){
        throw `Chat with id ${chatId} does not exist!`
    }
    if (!user) {
        throw `User with id ${senderId} does not exist!`
    }
}


function generateBotAnswer(store, action) {
    const {senderId, chatId} = action.payload;
    const storeData = store.getState();
    const userName = storeData.users.find(user => user.id === senderId).name;
    const chatName = storeData.chats.data.find(chat => chat.id === chatId).title;
    if (senderId === USER_ID) {
        clearTimeout(timeouts[chatId]);
        timeouts[chatId] = setTimeout(()=> store.dispatch(
            sendMessage(chatId, BOT_ID, `Hello ${userName}, I'm bot chat ${chatName}`)
        ), 1000)
    }
}

function  fireChat(store, action) {
    const {senderId, chatId} = action.payload;
    const path = store.getState().router.location.pathname.split('/');
    const currentChatId = parseInt(path[path.length-1]);
     if (senderId !== USER_ID && chatId !== currentChatId) {
        store.dispatch(startFire(chatId));
        setTimeout(()=> store.dispatch(finishFire(chatId)), 1500);
    }
}
