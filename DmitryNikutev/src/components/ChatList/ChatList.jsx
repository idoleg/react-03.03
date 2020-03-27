import React from 'react';
import {Chat} from "../Chat/Chat";

import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

import "./ChatList.css"


export const ChatList = () => {
   return (
      <List className="ChatList">
         {CHATS.map((chat, index) => (
               <Chat {...chat} key={index}/>
         ))}
      </List>
   );
};

const CHATS = [
   {
      name: "Bot",
      lastMessage: "Hello, I`m polite bot, send me something",
      avatar: "https://picsum.photos/201",
      selected: true
   },
   {
      name: "Valera",
      lastMessage: "The bot above is lying about last message",
      avatar: "https://picsum.photos/202"
   },
   {
      name: "Vasiliy",
      lastMessage: "Last message won`t change, this is not implemented yet",
      avatar: "https://picsum.photos/203"
   }
];
