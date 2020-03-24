import {bindActionCreators} from "redux";
import {addChat} from "../store/ChatActions";
import {getId} from "../utils/IdUtil";
import {BOT_NAME} from "../utils/Constants";
import {connect} from "react-redux";
import {ChatList} from "../components/ChatList/ChatList";

const mapStateToProps = (store, props) => {
   return {
      chats: store.chats,
      selectedChat: props.selectedChat,
   }

};

const mapDispatchToProps = (dispatch) => bindActionCreators({
   addChat
}, dispatch);

const mergeProps = (stateProps, dispatchProps, ownProps) => {

   const onAddChat = () => {
      const botId = getId();
      dispatchProps.addChat(
         botId, BOT_NAME + " " + botId, "https://picsum.photos/2" + botId % 100
      )
   };

   return {
      chats: stateProps.chats,
      selectedChat: stateProps.selectedChat,
      addChat: onAddChat,
   };
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(ChatList);
