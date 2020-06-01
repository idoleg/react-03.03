import {Messenger} from "../components/Messenger/Messenger";
import {connect} from "react-redux";
import {isEmpty} from "../utils/ObjUtil";
import {SUCCESS} from "../utils/Constants";


const mapStateToProps = (store, props) => {
   const chatId = parseInt(props.match.params.chatId);
   return {
      selectedChat: !isEmpty(store.chats) && store.chats.get(chatId) ? chatId : null,
      chatsReady: store.loading.chats.state === SUCCESS,
   }
};

export default connect(mapStateToProps)(Messenger);
