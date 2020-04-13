import {addMessage, setChats} from "../actions/ChatActions";
import {BOT_API_URL, CHATS_API_URL, ERROR, FETCHING, SUCCESS} from "../../utils/Constants";
import {setChatsLoading} from "../actions/LoadingActions";
import {getId} from "../../utils/IdUtil";


export const initChats = () => async (dispatch) => {
   dispatch(setChatsLoading(FETCHING));

   try {
      const res = await fetch(CHATS_API_URL);
      if (res.status !== 200)
         throw new Error("Error code " + res.status);
      const data = await res.json();
      const chats = new Map(data);

      chats.forEach(value => {
         value.messages = new Map(value.messages);
      });

      dispatch(setChats(chats));
      dispatch(setChatsLoading(SUCCESS))
   } catch (e) {
      dispatch(setChatsLoading(ERROR, e.message))
   }

};

//using botId as userid in request to differ chats
export const sendMessageToRemoteBot = (botId, botName, text) => async (dispatch, getState) => {

   const formData = new FormData();
   const messageBody = {
         ask: text,
         userid: botId,
         key: ""
   };
   formData.append("query", JSON.stringify(messageBody));

   try {
      const res = await fetch(BOT_API_URL, {
         method: "POST",
         body: formData
      });
      if (res.status !== 200)
         throw new Error("" + res.status);

      const {description, aiml} = await res.json();

      const response = aiml ? aiml : description;

      dispatch(addMessage(getId(), botName, response, true, botId))
   } catch (e) {
      dispatch(addMessage(getId(), botName, e.name + " " + e.message, true, botId))
   }

};
