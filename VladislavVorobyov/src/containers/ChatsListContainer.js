import {bindActionCreators} from 'redux';
import {push} from 'connected-react-router';
import {connect} from "react-redux";
import {addChat} from "Actions/chatActions";
import {removeChat} from "Actions/chatActions";
import {ChatsList} from "Components/ChatsList/ChatsList";


const mapStateToProps = ({chats:{loading, data, hasError, errorMessage}}, ownProps) => ({
    chats: data,
    loading,
    hasError,
    errorMessage,
});


const mapDispatchToProps = dispatch => bindActionCreators({
    handleAddNewChat: addChat,
    removeChat,
    push,
}, dispatch);

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    const {handleAddNewChat, push, removeChat} = dispatchProps;
    const {path} = ownProps;
    const props = {...ownProps};
    delete props['path'];
    return {
        ...ownProps,
        ...stateProps,
        handleAddNewChat,
        chats: stateProps.chats.map((chat) => ({
            ...chat,
            handleClick: () => push(`${path}/${chat.id}`),
            handleRemove: () => removeChat(chat.id),
        }))
    }
};


export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(ChatsList)