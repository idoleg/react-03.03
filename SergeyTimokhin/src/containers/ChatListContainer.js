import { connect } from 'react-redux';
import { ChatList } from '../components/ChatList/ChatList';

const mapStateToProps = (store) => {
    const chates = Object.entries(store.chats);

    // console.log(chat[1].name);
    // console.table(Object.entries(chats).map(([id, { name, massages }]) => ({ id, name, massages })))
    // console.log(chats.map(([id, chat]) => (id, chat)))

    const chats = chates.map(([id, { name, messages, avatar }]) => ({ id, name, messages, avatar }))

    console.log(chats[0].messages[1])



    return { chats }
}


export default connect(mapStateToProps)(ChatList) // , mapDispatchToProps, mergeProps