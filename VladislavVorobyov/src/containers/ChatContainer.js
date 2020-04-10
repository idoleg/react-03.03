import {bindActionCreators} from 'redux';
import {connect} from "react-redux";
import {sendMessage} from "Actions/messageActions";
import {Chat} from "Components/Chat/Chat";


const mapStateToProps = ({chats, messages, users}, ownProps) => {
    const chatId = ownProps.match.params.id;
    const chat =chats.data.find(chat => chat.id === chatId);
    const messageList = messages.filter(message => message.chatId===chatId)
        .map(({id, senderId, content}) => ({
            id,
            senderId,
            senderName: users.find(user =>user.id ===senderId).name,
            content
        }));
    return {
        chatTitle: chat ? chat.title: undefined,
        messages: messageList,
    }
};


const mapDispatchToProps = dispatch => bindActionCreators({
    sendMessage,
}, dispatch);

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    const chatId = ownProps.match.params.id;
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