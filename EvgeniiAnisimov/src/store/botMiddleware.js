import { sendMessage, addChat } from './chatActions';
import { sendMessageToBot } from './chatOperations';

const BOT_NAME = "Bot";
const timeoutId = {};

// export const botAnswer = function(store) {
//   return function(next) {
//     return function(action) {
//         console.log("botAnswer->action", action);
//         next(action);
//     }
//   }
// }

export default(store) => (next) => (action) => {
  next(action);
  if(action.type == sendMessage.toString()) {
    const {name, id, content} = action.payload;

    if(name !== BOT_NAME) {
      store.dispatch(sendMessageToBot(BOT_NAME, id, content));
      // clearTimeout(timeoutId[id]);
      // timeoutId[id] = setTimeout(() => generateBotAnswer(store, id, name), 4000);
    }
  }else if(action.type == addChat.toString()) {
     // generateBotAnswerForNewChat(store, action.payload.id);
     store.dispatch(sendMessageToBot(BOT_NAME, action.payload.id, "Привет!"));
  }
}

function generateBotAnswer(store, id, name) {
  const chatName = store.getState().chats.chats[id].name;

  store.dispatch(sendMessage(id, BOT_NAME, `Hello, ${name}, I'm robot in ${chatName}`))
}

// function generateBotAnswerForNewChat(store, id, name) {
//   const chatName = store.getState().chats.chats[id].name;
//
//   store.dispatch(sendMessage(id, BOT_NAME, `I'm robot, Welcome to new ${chatName}`))
// }
