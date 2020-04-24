
import { Chat } from '../components/Chat/Chat';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {sendMessage} from '../store/chatActions'
import { useEffect } from 'react';
import {push, LOCATION_CHANGE} from 'connected-react-router';

export const ROBOT = 'Robot';


const mapStateToProps = (store, props) => {

    const id = store.router.location.pathname.split('/')[2];
    const name = (id !== ''  && id !== undefined) ? store.chats.chats[id].name : ''; 
    const chats = id && store.chats.chats ? store.chats.chats : {}  



    console.log(id); 

    return {
        isLoading: store.isLoading,
        error: store.error,
        name,
        id,
        messages: chats && chats[id] ? chats[id].messages : undefined,
    }
    
}

    const mapDispatchToProps = (dispatch) => bindActionCreators({
        sendMessage
    }, dispatch)

    const mergeProps = (stateProps, dispatchProps, ownProps) => {

    const onSendMessage = ({name, content}) => {
        dispatchProps.sendMessage(stateProps.id, name, content);

    }
   
    return {
        isLoading: stateProps.isLoading,
        error: stateProps.error,
        nameChat: stateProps.name,
        messages: stateProps.messages,
        onSendMessage
    }
}
export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Chat);