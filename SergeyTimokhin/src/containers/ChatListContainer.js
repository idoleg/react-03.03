import { connect } from 'react-redux';
import { ChatList } from '../components/ChatList/ChatList';
import { createChat } from '../store/chatOperations';
import { bindActionCreators } from 'redux';


const mapStateToProps = (store) => {
    const chates = Object.entries(store.chats.chats);

    const chats = chates.map(([id, { name, messages, avatar }]) => ({ id, name, messages, avatar }));

    return {
        isLoading: store.chats.isLoading,
        error: store.chats.error,
        chats
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    createChat
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(ChatList) // mergeProps