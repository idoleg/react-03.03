import {bindActionCreators} from 'redux';
import {push} from 'connected-react-router';
import {connect} from "react-redux";
import {addChat} from "Actions/chatActions";
import {removeChat} from "Actions/chatActions";
import {ChatsList} from "Components/ChatsList/ChatsList";


const mapStateToProps = ({chats}, ownProps) => ({
    chats: chats
});


const mapDispatchToProps = dispatch => bindActionCreators({
    handleAddNewChat: addChat,
    removeChat,
    push,
}, dispatch);

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    const {handleAddNewChat, push, removeChat} = dispatchProps;

    return {
        ...ownProps,
        handleAddNewChat,
        chats: stateProps.chats.map((chat) => ({
            ...chat,
            handleClick: () => push(`/chats/${chat.id}`),
            handleRemove: () => removeChat(chat.id),
        }))
    }
};


export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(ChatsList)