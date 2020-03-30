
import { Chat } from '../components/Chat/Chat';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {sendMessage} from '../store/chatActions'


export const ROBOT = 'Robot';



//    handleRobotAnswer=(id)=>{
//        const currentMessages = this.state.chats[id].messages; 
//        const lastMessage = currentMessages[currentMessages.length - 1];
   
//        console.log(lastMessage)
//        if ( lastMessage && lastMessage.name != ROBOT)  {
   
//            clearTimeout(this.timeoutID); 
//            this.timeoutID = setTimeout(()=>this.handleSendMessage(id)({
//                name: ROBOT,
//                content: `Hello ${lastMessage.name}, I'm Robot!`,
//            }), 1000);
//        }
//    }


const mapStateToProps = (store, props) => {
    const {id} = props.match.params;
    const chats = id && store.chats.state.chats ? store.chats.state.chats : {}

    console.log(id); 
    console.log(chats); 
    return {
        id,
        messages: chats[id] ? chats[id].messages : undefined,
    }
    
}

    const mapDispatchToProps = (dispatch) => bindActionCreators({
        sendMessage
    }, dispatch)

    const mergeProps = (stateProps, dispatchProps, ownProps) => {
        const {id} = ownProps.match.params;
        console.log(dispatchProps); 

    const onSendMessage = ({name, content}) => {
        console.log(dispatchProps.sendMessage(id, name, content));
    }
   
    return {
        messages: stateProps.messages,
        onSendMessage
    }
}
export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Chat);