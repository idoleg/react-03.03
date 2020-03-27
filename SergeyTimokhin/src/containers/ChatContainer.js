// import React, {Component} from 'react';
import { Chat } from '../components/Chat/Chat';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sendMessage } from '../store/ChatActions';


export const bot = 'Bot'

// class ChatContainer extends Component {
//     // state = {
//     //     chats: {
//     //         1:{
//     //             name: 'Family',
//     //             messages:[
//     //                 {name: "Alex", content: "Hello fam!"},
//     //                 {name: "Dad", content: "Hello, how are you?"},
//     //                 {name: "Mom", content: " Don't forget about the dinner tonight!"},
//     //             ],
//     //         },
//     //         2:{
//     //             name: 'Work',
//     //             messages:[
//     //                 {name: "Dilan", content: "Hello, World!"},
//     //                 {name: "Andrew", content: "Hello, are you coming?"},
//     //                 {name: "Dilan", content: " Of course! See ya on Sunday"},
//     //             ],
//     //         },
//     //         3:{
//     //             name: 'Friends',
//     //             messages:[
//     //                 // {name: "Boby", content: "Hello, World!"},
//     //                 // {name: "Scott", content: "Hello, are you coming?"},
//     //                 // {name: "Jennifer", content: " Wish I could come, but I'm out of town this weekend"},
//     //             ],
//     //         },
//     //     }
//     // }

//     // timerId = null;

//     // handleRobotAnswer = () => {
//     //     const {id} = this.props.match.params;

//     //     if(id && this.state.chats[id]) {
//     //         const currentMessages = this.state.chats[id].messages;
//     //         const lastMessage = currentMessages[currentMessages.length - 1];

//     //         if(lastMessage && lastMessage.name != bot) {
//     //             clearTimeout(this.timeoutId);
//     //             this.timeoutId = setTimeout(() => this.handleSendMessage(id)({
//     //                 name: bot,
//     //                 content: `Hello ${lastMessage.name}, I'm bot!`,
//     //             }), 1000);
//     //         }
//     //     }
//     // }


//     handleSendMessage = (id) => (message) => {
//         // this.props.sendMessage(id, message.name, message.content)
//         // this.setState((state) => ({
//         //     chats: {
//         //         ...state.chats,
//         //         [id]: {
//         //             name: state.chats[id].name,
//         //             messages: [...state.chats[id].messages, message]
//         //         }
//         //     }
//         // })); // this.handleRobotAnswer
//     // }

//     render() {
//         // const {id} = this.props.match.params;
//         // const {messages} = this.state.chats[id];
//         // const messages = id && this.state.chats[id] ? this.state.chats[id].messages : undefined;
//         const {id, messages} = this.props;

//         return <Chat messages={messages} onSendMessage={this.handleSendMessage(id)}/>;
//     }
// }

const mapDispatchToProps = (dispatch) => bindActionCreators({
    sendMessage
}, dispatch)


const mapStateToProps = (store, props) => {
    // console.log(props)
    const { id } = props.match.params;
    const chats = id && store.chats ? store.chats : {};
    return {
        messages: chats[id] ? chats[id].messages : undefined,
    }
    //  console.log("mapStateToProps -> store" ,store)
    //  console.log("mapStateToProps -> props" ,props)
}


const mergeProps = (stateProps, dispatchProps, ownProps) => {
    const { id } = ownProps.match.params;

    const onSendMessage = ({ name, content }) => {
        dispatchProps.sendMessage(id, name, content)
    }

    return {
        messages: stateProps.messages,
        onSendMessage
    }

}


export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Chat)