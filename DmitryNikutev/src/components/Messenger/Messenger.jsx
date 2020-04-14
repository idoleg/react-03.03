import React from 'react';
import ChatList from "../../containers/ChatListContainer";
import ChatView from "../../containers/ChatViewContainer";

import "./Messenger.css"


export const Messenger = ({selectedChat}) => {

   return (
      <div className="Messenger">
         <ChatList selectedChat={selectedChat}/>
         {selectedChat ? <ChatView selectedChat={selectedChat}/> : "Choose a chat from list"}
      </div>
   );
};
