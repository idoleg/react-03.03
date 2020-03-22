import React from 'react';
import {ChatList} from "../../components/ChatList/ChatList";
import {BOT_NAME} from "../../utils/Constants";
import {ChatView} from "../ChatView/ChatView";
import {getId} from "../../utils/IdUtil";

import "./Messenger.css"


export const Messenger = (props) => {
   const chats = props.chats;
   const setChats = props.setChats;

   const addChat = () => {
      const botId = getId();
      setChats(new Map(chats.set(
         botId, {
            name: BOT_NAME + " " + botId,
            avatar: "https://picsum.photos/2" + botId % 100,
            messages: new Map(),
         }
      )));
   };

   const addMessage = (text, chatId, automated) => {
      const senderName = automated ? chats.get(chatId).name : props.username;
      const chat = chats.get(chatId);
      setChats(new Map(chats.set(
         chatId, {
            name: chat.name,
            avatar: chat.avatar,
            messages: new Map(chat.messages.set(
               getId(), {
                  name: senderName,
                  text: text,
                  automated: automated
               }
            ))
         }
      )));
   };

   const chatId = parseInt(props.match.params.chatId);
   return (
      <div className="Messenger">
         <ChatList chats={chats} selectedChat={chatId} addChat={addChat}/>
         {chats.get(chatId) ?
            <ChatView
               messages={chats.get(chatId).messages}
               addMessage={addMessage}
               chatId={chatId}/> :
            "Choose the chat from list"
         }
      </div>
   );
};
