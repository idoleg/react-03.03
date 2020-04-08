import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { addChat } from '../store/chatActions.js';

import { ChatList } from '../components/ChatList/ChatList.jsx'

const mapStateToProps = (store) => {
    const chats = Object.entries(store.app.chats).map(([id, {name, fire, selected}]) => ({id, name, fire, selected}))
    // console.log(chats)

    return {
        chats,
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    addChat,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ChatList)