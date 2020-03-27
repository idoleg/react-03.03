import {bindActionCreators} from 'redux';
import {connect} from "react-redux";
import {sendMessage} from "Actions/messageActions";
import {Chat} from "Components/Chat/Chat";



const mapStateToProps = ({chats, messages, users}, ownProps) => {
    const chatId = parseInt(ownProps.match.params.id);
    const messageList = Object.entries(messages)
        .filter(([id, message]) => message.chatId===chatId)
        .map(([id, {chatId, senderId, content}])=> ({
            id: parseInt(id),
            senderId,
            senderName: users[senderId].name,
            content
        }));
    return {
        chatTitle: chats[chatId] ? chats[chatId].title: undefined,
        messages: messageList,
    }
};


const mapDispatchToProps = dispatch => bindActionCreators({
    sendMessage,
}, dispatch);

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    const chatId = parseInt(ownProps.match.params.id);
    const handleNewMessage = (content, senderId = 1) => {
        dispatchProps.sendMessage(chatId, senderId, content);
    };
    return {
        ...stateProps,
        ...ownProps,
        handleNewMessage,
    }
};


export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Chat);