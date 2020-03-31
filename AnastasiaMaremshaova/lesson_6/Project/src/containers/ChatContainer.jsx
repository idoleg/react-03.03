
import { Chat } from '../components/Chat/Chat';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {sendMessage} from '../store/chatActions'


export const ROBOT = 'Robot';




const handleRobotAnswer = (id, chats, handleSendMessage) =>{
       const currentMessages = chats[id].messages; 
       const lastMessage = currentMessages[currentMessages.length - 1];
   
       console.log(lastMessage);
       if ( lastMessage && lastMessage.name != ROBOT)  {
   
           clearTimeout(this.timeoutID); 
           timeoutID = setTimeout(()=>handleSendMessage({
               name: ROBOT,
               content: `Hello ${lastMessage.name}, I'm Robot!`,
           }), 1000);
       }
   }


const mapStateToProps = (store, props) => {
    const {id} = props.match.params;
    const chats = id && store.chats.state.chats ? store.chats.state.chats : {}

    console.log(id); 
    console.log(chats); 
    return {
        id,
        messages: chats && chats[id] ? chats[id].messages : undefined,
    }
    
}

    const mapDispatchToProps = (dispatch) => bindActionCreators({
        sendMessage
    }, dispatch)

    const mergeProps = (stateProps, dispatchProps, ownProps) => {
        const {id} = ownProps.match.params;
        console.log(dispatchProps); 

    const onSendMessage = ({name, content}) => {
        dispatchProps.sendMessage(id, name, content);

    }
   
    return {
        messages: stateProps.messages,
        onSendMessage
    }
}
export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Chat);