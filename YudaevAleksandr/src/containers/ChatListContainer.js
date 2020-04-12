import {connect} from "react-redux";
import {ChatList} from "../components/ChatList/ChatList";
import {createChat} from "../store/chatOperations";
import {bindActionCreators} from "redux";

const mapStateToProps = (store) => {
    const chats = Object.entries(store.chats).map(([id, {name}]) =>({id, name}));
    return {chats};
};

const mapDispatchToProps = (dispatch) => bindActionCreators({createChat}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);