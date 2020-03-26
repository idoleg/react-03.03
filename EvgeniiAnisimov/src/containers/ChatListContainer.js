import { connect } from 'react-redux';
import { ChatList } from '../components/ChatList/ChatList';
import { addChat } from '../store/chatActions';
import { bindActionCreators } from 'redux';

const mapStateToProps = (store) => {
  const chats = Object.entries(store.chats).map(([id, {name}])=>({id, name}));

  return {
    chats
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({addChat}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);
