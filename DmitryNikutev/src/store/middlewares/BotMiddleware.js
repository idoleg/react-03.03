import {addChat, addMessage} from "../actions/ChatActions";
import {getId} from "../../utils/IdUtil";
import {BOT_GREETING, BOT_RESPONSE_DELAY} from "../../utils/Constants";
import {sendMessageToRemoteBot} from "../operations/ChatOperations";


const botTimer = {};

export const BotMiddleware = store => next => action => {
   next(action);

   if (action.type === addMessage.toString()) {
      const {name, automated, chat: chatId, content} = action.payload;

      if (!automated) {
         const chatName = store.getState().chats.get(chatId).name;
         clearTimeout(botTimer[chatId]);
         botTimer[chatId] = setTimeout(
            () => store.dispatch(sendMessageToRemoteBot(chatId, chatName, content)),
            BOT_RESPONSE_DELAY
         );

      }
   } else if (action.type === addChat.toString()) {
      const {id, name} = action.payload;
      store.dispatch(addMessage(getId(), name, BOT_GREETING, true, id));
   }
};
