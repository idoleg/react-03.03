import {bindActionCreators} from 'redux';
import {connect} from "react-redux";
import {addChat} from "Actions/chatActions";
import {ChatsList} from "Components/ChatsList/ChatsList";

const mapStateToProps = ({chats}, ownProps) => ({
    ...ownProps,
    chats: chats
});


const mapDispatchToProps = dispatch => bindActionCreators({
    handleAddNewChat: addChat,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatsList)