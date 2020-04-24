import {ChatList} from '../components/ChatList/ChatList';
import {connect} from 'react-redux'
import {deleteChat, saveNameChat, setFill, openEditNameChat, exitEditNameChat} from '../store/chatActions'
import {bindActionCreators} from 'redux'
export const ROBOT = 'Robot';

const mapStateToProps = (store, props) => {
    const chats = store.chats.chats;
    const classOpenFormCreateChat = props.classOpenFormCreateChat;
    const openedEditNameChat = store.chats.openedEditNameChat;

    return {isLoading: store.chats.isLoading, error: store.chats.error, chats, openedEditNameChat, classOpenFormCreateChat}
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    deleteChat, saveNameChat, setFill, openEditNameChat, exitEditNameChat
}, dispatch)

const mergeProps = (stateProps, dispatchProps, ownProps) => {

    const OnOpenEditNameChat= () =>{
        dispatchProps.openEditNameChat(); 
    }
    const OnExitEditNameChat= () =>{
        dispatchProps.exitEditNameChat(); 
    }
    
    const OnSetFill= (id) =>{
        dispatchProps.setFill(id); 
    }
    const OnSaveNameChat = (id, nameChat) => {
        dispatchProps.saveNameChat(id, nameChat); 
    }
    const OnDeleteChat = (id) => {
        dispatchProps.deleteChat(id);
    }

    return {isLoading: stateProps.isLoading,
        error: stateProps.error,
        chats: stateProps.chats,
        openedEditNameChat: stateProps.openedEditNameChat,
        classOpenFormCreateChat: stateProps.classOpenFormCreateChat,
        OnDeleteChat,
        OnSaveNameChat,
        OnSetFill, 
        OnOpenEditNameChat, 
        OnExitEditNameChat}
}
export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(
    ChatList
);
