import {Messenger} from "../components/Messenger/Messenger";
import {connect} from "react-redux";


const mapStateToProps = (store, props) => {
   const chatId = parseInt(props.match.params.chatId);
   return {
      selectedChat: store.chats.get(chatId) ? chatId : null,
   }
};

export default connect(mapStateToProps)(Messenger);
