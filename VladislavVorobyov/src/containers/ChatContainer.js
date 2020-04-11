import {bindActionCreators} from 'redux';
import {connect} from "react-redux";
import {sendMessage} from "Actions/messageActions";
import {Chat} from "Components/Chat/Chat";


const mapStateToProps = ({chats, messages, users, router:{location:{pathname}}}, ownProps) => {

    const {path} = ownProps;
    const props = {...ownProps};
    delete props['path'];
    const chatId = pathname.match(`${path}/(.*)/?`)[1];
    const chat =chats.data.find(chat => chat.id === chatId);
    const messageList = messages.data.filter(message => message.chatId===chatId)
        .map(({id, senderId, content}) => ({
            id,
            senderId,
            senderName: users.find(user =>user.id ===senderId).name,
            content
        }));
    return {
        ...props,
        chatId,
        chatTitle: chat ? chat.title: undefined,
        messages: messageList,
        loading: messages.loading,
        errorMessage: messages.errorMessage,
    }
};


const mapDispatchToProps = dispatch => bindActionCreators({
    sendMessage,
}, dispatch);

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    const chatId = stateProps.chatId;
    delete stateProps['chatId'];
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