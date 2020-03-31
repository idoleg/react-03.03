import {addChat} from "../actions/ChatActions";
import {push} from "connected-react-router";
import {CHATS_PATH} from "../../utils/Constants";


export const ChatListMiddleware = store => next => action => {
   next(action);

   if (action.type === addChat.toString()) {
      const {id} = action.payload;
      store.dispatch(push(CHATS_PATH + "/" + id));
   }
};
