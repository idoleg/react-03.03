import { sendMessage, addChat } from './ChatActions';

// export const botAnswer = function(store) {
//     return function(next) {
//         return function(action) {
//             console.log("botAnswer --> action", action);
//             next(action)
//         }
//     }
// }

const BOT_NAME = "Bot";
const timeoutsId = {};

export default (store) => (next) => (action) => {
    next(action);

    if (action.type == sendMessage.toString()) {
        const { name, id } = action.payload;
        if (name !== BOT_NAME) {
            clearTimeout(timeoutsId[id])
            timeoutsId[id] = setTimeout(generateBotAnswer, 4000, store, id, name)
        }
    } else if (action.type == addChat.toString()) {
        generateBotAnswerForNewChat(store, action.payload.id)
    }
}

function generateBotAnswer(store, id, name) {
    const chatName = store.getState().chats[id].name;
    store.dispatch(sendMessage(id, BOT_NAME, `Hello, ${name}, it's Bot in chat "${chatName}"`))
}

function generateBotAnswerForNewChat(store, id) {
    const chatName = store.getState().chats[id].name;
    store.dispatch(sendMessage(id, BOT_NAME, `Welcome to the new chat "${chatName}"`))
}