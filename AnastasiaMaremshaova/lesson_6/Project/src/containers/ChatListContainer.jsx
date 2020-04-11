import { ChatList } from '../components/ChatList/ChatList';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'


export const ROBOT = 'Robot';


const mapStateToProps = (store, props) => {
    const chats = store.chats.state.chats;
    console.log(chats); 
    const classOpenFormCreateChat = props.classOpenFormCreateChat;
    return {
        chats,
        classOpenFormCreateChat
    }
    
}


export default connect(mapStateToProps)(ChatList);
