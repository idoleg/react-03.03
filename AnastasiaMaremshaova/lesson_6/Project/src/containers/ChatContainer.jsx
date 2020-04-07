
import { Chat } from '../components/Chat/Chat';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {sendMessage} from '../store/chatActions'


export const ROBOT = 'Robot';


const mapStateToProps = (store, props) => {
    const {id} = props.match.params;
    console.log(store.chats.state.chats[id].name)
    const name = store.chats.state.chats[id].name; 
    const chats = id && store.chats.state.chats ? store.chats.state.chats : {}

    console.log(id); 
    console.log(chats); 
    return {
        name,
        id,
        messages: chats && chats[id] ? chats[id].messages : undefined,
    }
    
}

    const mapDispatchToProps = (dispatch) => bindActionCreators({
        sendMessage
    }, dispatch)

    const mergeProps = (stateProps, dispatchProps, ownProps) => {
        const {id} = ownProps.match.params;
        const nameChat = stateProps.name; 

        console.log(nameChat); 

    const onSendMessage = ({name, content}) => {
        dispatchProps.sendMessage(id, name, content);

    }
   
    return {
        nameChat: nameChat,
        messages: stateProps.messages,
        onSendMessage
    }
}
export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Chat);