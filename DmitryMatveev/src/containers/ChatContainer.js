import { Chat } from '../components/Chat/Chat';
export const ROBOT = 'RoboFriend';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {sendMessage} from '../store/chatActions';

const mapStateToProps = (store, props) => {
    const {id} = props.match.params;
    const chats = id && store.chats ? store.chats : {}

    return {
        messages: chats[id] ? chats[id].messages : undefined,
    }
    
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    sendMessage
}, dispatch)

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    const {id} = ownProps.match.params;

    const onSendMessage = ({name, text}) => {
        dispatchProps.sendMessage(id, name, text)
    }

    return {
        messages: stateProps.messages,
        onSendMessage
    }
}
export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Chat);