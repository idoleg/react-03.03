import { sendMessage, addChat } from './chatActions';
import { blinkChat, unblinkChat } from './blinkActions';
import { textCapitalize } from '../components/common/textUtils';

const BOT_AUTHOR_ACCESS = 'bot';
const BOT_NAME = 'robot';
const timeoutsId = {};

export default store => next => action => {
  next(action);

  if (action.type === sendMessage.toString()) {
    const { id } = action.payload;
    const { chats } = store.getState();
    const { messages } = chats[id];
    const lastMessage = action.payload.message;

    if (lastMessage.authorAccess !== BOT_AUTHOR_ACCESS) {
      const previousMessage = messages[messages.length - 2];

      if (messages.length > 1 && lastMessage.author === previousMessage.author) {
        clearTimeout(timeoutsId[id]);
      }

      timeoutsId[id] = setTimeout(generateBotAnswer, 3000, store, id, lastMessage);
    }
  } else if (action.type === addChat.toString()) {
    generateBotAnswerForNewChat(store, action.payload.id);
  }
};

function generateBotAnswer(store, id, { author }) {
  store.dispatch(
    sendMessage({
      id,
      message: {
        author: BOT_NAME,
        text: `Hi ${textCapitalize(author)}, i am your personal assistent`,
        authorAccess: BOT_AUTHOR_ACCESS
      }
    })
  );

  store.dispatch(blinkChat(id));
  setTimeout(() => store.dispatch(unblinkChat(id)), 5000);
}

function generateBotAnswerForNewChat(store, id) {
  const { chatTitle } = store.getState().chats[id];

  store.dispatch(
    sendMessage({
      id,
      message: {
        author: BOT_NAME,
        text: `Welcome to new Chat: ${chatTitle}`,
        authorAccess: BOT_AUTHOR_ACCESS
      }
    })
  );
}
