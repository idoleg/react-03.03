import {handleActions} from 'redux-actions';
import {addChat, initChats, addMessage} from '../actions/ChatActions';
import {CHATS} from "../../utils/Constants";

const initialState = {};

export default handleActions({
   [initChats]: (store, action) => {
      return new Map(CHATS);
   },
   [addMessage]: (store, action) => {
      const {id, name, content, automated, chat: chatId} = action.payload;
      const chat = store.get(chatId);
      return new Map(store.set(
         chatId, {
            name: chat.name,
            avatar: chat.avatar,
            messages: new Map(chat.messages.set(
               id, {
                  name: name,
                  text: content,
                  automated: automated
               }
            ))
         }
      ));
   },
   [addChat]: (store, action) => {
      const {id, name, avatar} = action.payload;
      return new Map(store.set(
            id, {
               name: name,
               avatar: avatar,
               messages: new Map(),
            }
         ));

   },
}, initialState)
