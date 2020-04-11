import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ChatList } from './../components/ChatList/ChatList';
import { addChat } from './../store/chatActions';


const mapStateToProps = (store) => {
  const chats = Object.entries(store.chats).map(([id, {name}]) => ({id, name}));

  return {chats};
}

const mapDispatchToProps = (dispatch) => bindActionCreators({addChat}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);