import {bindActionCreators} from 'redux';
import {push} from 'connected-react-router';
import {connect} from "react-redux";
import {addChat} from "Actions/chatActions";
import {ChatsList} from "Components/ChatsList/ChatsList";


const mapStateToProps = ({chats}, ownProps) => ({
    chats: chats
});


const mapDispatchToProps = dispatch => bindActionCreators({
    handleAddNewChat: addChat,
    push,
}, dispatch);

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    const {handleAddNewChat, push} = dispatchProps;
    return {
        ...ownProps,
        handleAddNewChat,
        chats: Object.entries(stateProps.chats).map(([id, chat]) => ({
            id: id,
            title: chat.title,
            handleClick: () => push(`/chats/${id}`),
        }))
    }
}


export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(ChatsList)