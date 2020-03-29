import { sendMessage, addChat } from './chatActions';

const BOT_NAME = 'Mr. Robot';
const timeoutsId = {};

export default (store) => (next) => (action) => {
  next(action);

  if(action.type === sendMessage.toString()) {
    const {name, id} = action.payload;

    if(name !== BOT_NAME) {
      clearTimeout(timeoutsId[id]);
      timeoutsId[id] = setTimeout(generateBotAnswer, 2000, store, id, name);
    }
  } else if(action.type === addChat.toString()) {
    generateBotAnswerNewChat(store, action.payload.id);
  }
}

function generateBotAnswer(store, id, name) {
  const chatName = store.getState().chats[id].name;

  store.dispatch(sendMessage(id, BOT_NAME, `What's wrong with you, ${ name }? I'm Robot in chat "${ chatName }", don't talk to me.`))
}

function generateBotAnswerNewChat(store, id) {
  const chatName = store.getState().chats[id].name;

  store.dispatch(sendMessage(id, BOT_NAME, `Welcome to new chat "${ chatName }"`));
}
