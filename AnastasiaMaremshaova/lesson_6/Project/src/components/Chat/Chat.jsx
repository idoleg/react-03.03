import React from "react";
import PropTypes from 'prop-types';
import {Message} from '../Message/Message';
import {MessageList} from '../MessageList/MessageList';
import {ChatForm} from '../ChatForm/ChatForm';
import {HeaderChat} from '../HeaderChat/HeaderChat'
import {Loader} from '../Loader/Loader'
import './Chat.css'

export const Chat = ({isLoading, error, nameChat, messages, onSendMessage}) => {

    const [classShowChatList, setClassShowChatList] = React.useState(''); 
    let res; 
    if(isLoading) {
        res = <div className ='Loading'><Loader/></div>}
    else
        res =  <MessageList messages={messages} />
        
    if(error) {
        res= <div className="error">Ошибка подключения</div>
    }

    if(messages){
    return (<div className={'Chat '+ classShowChatList}>
        <HeaderChat nameChat={nameChat} setClassShowChatList={setClassShowChatList}/>
        {res}
        <ChatForm onSendMessage={onSendMessage}/>
    </div>);}
}

Chat.propTypes = {
    nameChat: PropTypes.string, 
    chats: PropTypes.arrayOf(PropTypes.shape(Message.propTypes)),
    onSendMessage: PropTypes.func.isRequired,
}