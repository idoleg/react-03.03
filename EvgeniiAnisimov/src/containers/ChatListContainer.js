import { connect } from 'react-redux';
import { ChatList } from '../components/ChatList/ChatList';
// import { addChat } from '../store/chatActions';
import { createChat } from '../store/chatOperations';
import { bindActionCreators } from 'redux';

const mapStateToProps = (store) => {
  const chats = Object.entries(store.chats.chats).map(([id, {name, fire}])=>({id, name, fire}));

  return {
    isLoading: store.chats.isLoading,
    error: store.chats.error,
    chats
  }
}

// const mapDispatchToProps = (dispatch) => bindActionCreators({addChat}, dispatch);
const mapDispatchToProps = (dispatch) => bindActionCreators({createChat}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);
