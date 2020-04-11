import {connect} from "react-redux";
import {ChatView} from "../components/ChatView/ChatView";
import {addMessage} from "../store/actions/ChatActions";
import {getId} from "../utils/IdUtil";
import {bindActionCreators} from "redux";


const mapStateToProps = (store, props) => {
   const chat = store.chats.get(props.selectedChat);
   return {
      selectedChat: props.selectedChat,
      messages: chat.messages,
      botName: chat.name,
      username: store.user.username,
   }
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
   addMessage
}, dispatch);

const mergeProps = (stateProps, dispatchProps, ownProps) => {

   const onAddMessage = (text, automated = false) => {
      dispatchProps.addMessage(
         getId(),
         automated ? stateProps.botName : stateProps.username,
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
