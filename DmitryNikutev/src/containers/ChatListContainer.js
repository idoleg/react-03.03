import {bindActionCreators} from "redux";
import {addChat} from "../store/actions/ChatActions";
import {getId} from "../utils/IdUtil";
import {BOT_NAME, FETCHING, SUCCESS} from "../utils/Constants";
import {connect} from "react-redux";
import {ChatList} from "../components/ChatList/ChatList";
import {isEmpty} from "../utils/ObjUtil";


const mapStateToProps = (store, props) => {
   return {
      chats: store.chats,
      loading: store.loading.chats,
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
      loading: stateProps.loading,
      selectedChat: stateProps.selectedChat,
      addChat: onAddChat,
   };
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(ChatList);
