import React from 'react';
import ChatList from "../../containers/ChatListContainer";
import ChatView from "../../containers/ChatViewContainer";

import "./Messenger.css"


export const Messenger = ({selectedChat, chatsReady}) => {
   return (
      <div className="Messenger">
         <ChatList selectedChat={selectedChat}/>
         {chatsReady
            ? (selectedChat ? <ChatView selectedChat={selectedChat}/> : "Choose a chat from list")
            : <></>}
      </div>
   );
};
