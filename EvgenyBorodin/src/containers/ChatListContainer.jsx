import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { addChat, renameChat, deleteChat } from '../store/chatActions.js';

import { ChatList } from '../components/ChatList/ChatList.jsx'

const mapStateToProps = (store) => {
    const chats = Object.entries(store.app.chats)
                        .map(([id, {name, fire, selected}]) => ({id, name, fire, selected}))
    // console.log(chats)
    return {
        isLoading: store.app.isLoading,
        error: store.app.error,
        chats,
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    addChat,
    renameChat,
    deleteChat
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ChatList)