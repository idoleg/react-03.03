
import { ChatList } from '../components/ChatList/ChatList';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {createNewChat} from '../store/chatActions'


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
    const chats = store.chats.state.chats;
    const id = store.chats.state.countChats; 
    return {
        id,
        chats
    }
    
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    createNewChat
}, dispatch)

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    console.log(stateProps)
    const chats = stateProps.chats;
    const id = Number(stateProps.id) + 1;

    const onCreateNewChat = () => {
        console.log(dispatchProps.createNewChat(chats, id));
    }
   
    return {
        chats: stateProps.chats,
        onCreateNewChat
    }
}
export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(ChatList);