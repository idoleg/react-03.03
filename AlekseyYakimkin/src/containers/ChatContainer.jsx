import React, {Component} from 'react';
import { Chat } from '../components/Chat/Chat'
import { ChatList } from '../components/ChatList/ChatList'
import { Header } from '../components/Header/Header'

export const ROBOT = "Robot"

export class ChatContainer extends Component {
    state = {
        chats: {
            1:{
                url: "/chats/1",
                name: "Chat 1",
                img: "https://via.placeholder.com/40",
                messages:[
                    { name: "Ivan", content: "Hello, world!" },
                    { name: "Petr", content: "Helo, how are you?" },
                    { name: "Ivan", content: "I'm well" },
                ],
            },
            2:{
                url: "/chats/2",
                name: "Chat 2",
                img: "https://via.placeholder.com/40",
                messages:[
                    { name: "Alex", content: "Hello, world!" },
                    { name: "Jon", content: "Helo" },
                    { name: "Alex", content: "Bye!" },
                ],
            },
            3:{
                url: "/chats/3",
                name: "Chat 3",
                img: "https://via.placeholder.com/40",
                messages:[
                    { name: "Юля", content: "Привет!" },
                    { name: "Jon", content: "Helo" },
                    { name: "Юля", content: "Спик инглиш?" },
                ],
            },
            4:{
                url: "/chats/4",
                name: "Chat 4",
                img: "https://via.placeholder.com/40",
                messages: []
            }
        },
        timerId :null
    }
    timerId = null

    componentWillUnmount(){
        console.log("ChatContainer unmount")
    }
    //componentDidUpdate() {}

    handleRobotAnswer = () => {
        const {id} = this.props.match.params
        if(id && this.state.chats[id]){
            const  lastMessage = this.state.chats[id].messages[this.state.chats[id].messages.length - 1]
            clearInterval(this.timerId)
            if(lastMessage.name != ROBOT){
                this.timerId = setTimeout(() => this.handleSendMessage(id)({
                    name: ROBOT,
                    content: `Hello ${lastMessage.name}, I'm ${ROBOT}`
                    }),1000)
            }
        }
    }

    handleSendMessage = (id) =>(message) => {
        console.dir(this.timerId)
        this.setState((state) => ({
            chats:{
                ...state.chats,
                [id]:{
                    name: state.chats[id].name,
                    img: state.chats[id].img,
                    url: state.chats[id].url,
                    messages:[...state.chats[id].messages, message]
                }
            }
        }),this.handleRobotAnswer)
    }

    handleAddChat = () => {
        console.dir(Object.keys(this.state.chats))//Object.keys(chats).map((key, index) =>
        const chatsKeys = [...Object.keys(this.state.chats)];
        const newKey = Math.max(...chatsKeys) + 1
        console.log("newKey "+newKey)
        this.setState((state) => ({
            chats:{
                ...state.chats,
                [newKey]:{
                    name: "Chat "+ newKey,
                    img: "",
                    url: "/chats/"+newKey,
                    messages:[]
                }
            }
        }))
        console.log(this.state.chats)
    }

    render() {
        console.log(this.props)
        console.log(this.props.module)
        // if(this.props.module === "ChatList"){
        //     return  (
        //         <>
        //             <ChatList chats={this.state.chats}/>
        //         </>
        //     )
        // }else
        {
            const {id} = this.props.match.params
            const url = this.props.match.url
            const messages = id && this.state.chats[id] ? this.state.chats[id].messages : undefined
            const headerName = id && this.state.chats[id] ? this.state.chats[id].name : "Чаты"
            console.log(this.props.match.url)
            if(url === "/chats/add"){
                //this.handleAddChat()
            }
            console.log(id)
            console.log(headerName)
            return  (
                <>
                    <Header  headerName={headerName}/>


                    <ChatList chats={this.state.chats} handleAddChat={this.handleAddChat}/>
                    <Chat messages={messages} onSendMessage={this.handleSendMessage(id)}/>
                </>
            )
        }
    }
}