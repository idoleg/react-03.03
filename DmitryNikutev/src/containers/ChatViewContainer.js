import {connect} from "react-redux";
import {ChatView} from "../components/ChatView/ChatView";
import {addMessage} from "../store/ChatActions";
import {getId} from "../utils/IdUtil";
import {bindActionCreators} from "redux";
import {BOT_NAME} from "../utils/Constants";


const mapStateToProps = (store, props) => {
   const chat = store.chats.get(props.selectedChat);
   return {
      selectedChat: props.selectedChat,
      messages: chat.messages,
      botName: chat.name,
   }

};

const mapDispatchToProps = (dispatch) => bindActionCreators({
   addMessage
}, dispatch);

const mergeProps = (stateProps, dispatchProps, ownProps) => {

   const onAddMessage = (text, automated = false) => {
      //TODO get username from store, replace [username]
      dispatchProps.addMessage(
         getId(),
         automated ? stateProps.botName : "[username]",
         text,
         automated,
         stateProps.selectedChat)
   };

   return {
      messages: stateProps.messages,
      addMessage: onAddMessage,
   };
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(ChatView);
